import "./Navbar.css"
import { Link } from "react-router-dom"

export const Nabvar=()=>{
    return(
            <div className="nav-main-div">
                <img src="https://www.masaischool.com/img/navbar/logo.svg" alt="" />
                <Link to="/lectures"><p>Lectures</p></Link>
                <Link to="/assigments"><p>Assignments</p></Link>
                <Link to="/courses"> <p>Courses</p></Link>
                <Link to="/quizzes"> <p>Quizzes</p></Link>
                <Link to="/tickets">  <p>Tickets</p></Link>
                <Link to="discussion"> <p>Discussion</p></Link>
               <Link to="signIn"> <p>Sign In</p></Link> 
            </div>
        
    )
}