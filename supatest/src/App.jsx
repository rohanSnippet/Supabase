import Home from './Home'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'; 
import TestPage from './TestPage'
import './App.css'
import Update from './Update';

function App() {
  return (
   <BrowserRouter>
    <h2>Supabase Project</h2>
   <nav>
   
   <Link to="/">Home</Link>
   <Link to="/testPage">Supa Page</Link>
   </nav>
   <Routes>
    <Route index path='/' element={<Home/>}></Route>
    <Route path='/testPage' element={<TestPage/>}></Route>
    <Route path='/:id' element={<Update/> }></Route>
   </Routes>
   </BrowserRouter>
  )
}

export default App
