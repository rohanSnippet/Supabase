import React, { useState } from 'react'
import supabase from './supabaseConfig';
import { useNavigate } from 'react-router-dom';

const Create = () => {

  const [title,setTitle] = useState(null);
  const [method,setMethod] = useState(null);
  const [rating,setRating] = useState(null);
  const [formError,setFormError] = useState(null);
 const navigate = useNavigate();

  const handleSubmit = async(e)=>{
e.preventDefault();

if(!title || !method || !rating){
  setFormError("Please fill every field")
  return 
}

    const {data,error} = await supabase.from('smoothie').insert([{title,method,rating}])

    if(error){
      console.log(error)
      setFormError("Please fill every field")
    }

    if(data){
      console.log(data)
      setFormError(null)
navigate('/')
    }
  }

  return (
    <div className='form'>
     <form  onSubmit={handleSubmit}>
        <label htmlFor=""> Title : </label>
          <input type="text" name="title" id="title" value={title} onChange={(e)=>setTitle(e.target.value)}/>
        
        <label htmlFor=""> Method :</label>
          <textarea name="method" id="method" value={method} onChange={(e)=>setMethod(e.target.value)}></textarea>
        
        <label htmlFor=""> Rating :</label>
          <input type="number" name="rating" id="rating" value={rating} onChange={(e)=>setRating(e.target.value)}/>

         <button>Create a Smoothie</button>

         {formError && (<p style="color:red">{formError}</p>)}
     </form>
    </div>
  )
}

export default Create
