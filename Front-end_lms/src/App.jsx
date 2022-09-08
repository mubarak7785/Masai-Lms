import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {Home} from './components/Home/Home'
import { Signup } from './components/Signup/Signup'
import { Routes ,Route} from 'react-router-dom'
import { Login } from './components/Login/Login'
import { Lectures } from './components/Lectures/Letures'
import { Assignments } from './components/Assignments/Assignments'
import { Admin } from './components/Admin/Admin'



function App() {
 

  return (
    <div >
      
     <Routes>
    <Route path='/signup' element={<Signup/>}/>
      <Route path='/' element={<Login/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path="/assignments" element={<Assignments/>}/>
      <Route path="/lectures" element={<Lectures/>}/>
      <Route path="/admin" element={<Admin/>}/>
     </Routes>
    
    </div>
  )
}

export default App
