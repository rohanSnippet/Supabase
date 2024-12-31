import React from 'react'

const SignUp = () => {

const [formData,setFormData] = useState({
    name:'',email:'',passsword:''
})

const handleChange =(e)=>{
setFormData((prevData)=> {return { ...prevData,
      [e.target.name]:e.target.value
}})
}

const handleSignUp = async(e)=>{
    e.preventDefault();
  try {
    const { data, error } = await supabase.auth.signUp(
        {
          email: formData.email,
          password: formData.password,
          options: {
            data: {
             name: formData.name,
            }
          }
        }
      )

      alert('check your email for verification ')
  } catch (error) {
    alert(error)
  }

     
      
}

  return (
    <div classname="form">
    <form onSubmit={handleSignUp}>
      <h2>Signup</h2>
      
      
      <label for="name">Name:</label>
      <input type="text" id="name" name="name" onChange={handleChange} required placeholder="Enter your name"/>
      
     
      <label for="email">Email:</label>
      <input type="email" id="email" name="email" onChange={handleChange}  required placeholder="Enter your email"/>
      
  
      <label for="password">Password:</label>
      <input type="password" id="password" name="password"  onChange={handleChange} required placeholder="Enter your password"/>

           <button>Sign Up</button>
    </form>
  </div>
  )
}

export default SignUp
