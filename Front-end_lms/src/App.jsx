import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import { Nabvar } from './components/Navbar/Navbar'
import {Routes,Route} from "react-router-dom"
import { Assignments } from './components/Assignments/Assignments'
function App() {
 

  return (
    <div >
      <Nabvar/>
     <Routes>
      <Route path='/' element={<Ho}/>
      <Route path='/assignments' element={<Assignments/>}/>
     </Routes>
    </div>
  )
}

export default App
