import Home from './Home'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'; 
import Create from './Create';
import './App.css'
import Update from './Update';
import SignUp from './SignUp';

function App() {
  return (
   <BrowserRouter>
    <h2>Supabase Project</h2>
   <nav>
   
   <Link to="/">Home</Link>
   <Link to="/create">Create</Link>
   <Link to="/signup">Sign Up</Link>
   </nav>
   <Routes>
    <Route index path='/' element={<Home/>}></Route>
    <Route path='/create' element={<Create/>}></Route>
    <Route path='/:id' element={<Update/> }></Route>
    <Route path='/signup' element={<SignUp /> }></Route>
   </Routes>
   </BrowserRouter>
  )
}

export default App
