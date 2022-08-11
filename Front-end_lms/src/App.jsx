import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {Home} from './components/Home/Home'
import { Signup } from './components/Signup/Signup'
import { Routes ,Route} from 'react-router-dom'
import { Login } from './components/Login/Login'
import { Lectures } from './components/Lectures/Letures'



function App() {
 

  return (
    <div >
      
     <Routes>
    <Route path='/' element={<Signup/>}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/home' element={<Home/>}/>
      <Route path="/lectures" element={<Lectures/>}/>
     </Routes>
    
    </div>
  )
}

export default App
