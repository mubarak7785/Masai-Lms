import { Nabvar } from '../Navbar/Navbar'
import {Routes,Route} from "react-router-dom"
import { Assignments } from '../Assignments/Assignments'
import { Lectures } from '../Lectures/Letures'
import { Login } from '../Login/Login'
import { Signup } from '../Signup/Signup'
export const Home=()=>{
    return(
        <div>
             <Nabvar/>
     <Routes>
      {/* <Route path='/' element={<Home/>}/> */}
      {/* <Route path="/signIn" element={<Signup/>}/>
        <Route path="/login" element={<Login/>}/> */}
      <Route path='/assignments' element={<Assignments/>}/>
      <Route path='/lectures'element={<Lectures/>}/>
     </Routes>
        </div>
    )
}