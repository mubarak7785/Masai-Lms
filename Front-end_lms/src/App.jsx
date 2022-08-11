import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Nabvar } from './components/Navbar/Navbar'
import {Routes,Route} from "react-router-dom"
import { Assignments } from './components/Assignments/Assignments'
import { Home } from './components/Home/Home'
import { Lectures } from './components/Lectures/Letures'
function App() {
 

  return (
    <div >
      <Nabvar/>
     <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/assignments' element={<Assignments/>}/>
      <Route path='/lectures'element={<Lectures/>}/>
     </Routes>
    </div>
  )
}

export default App
