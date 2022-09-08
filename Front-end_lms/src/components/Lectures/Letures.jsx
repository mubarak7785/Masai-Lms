import { useState } from "react"
import { useEffect } from "react"
import { Nabvar } from "../Navbar/Navbar"
import "./Lectures.css"
export const Lectures=()=>{

    const [data,setData]=useState([])


    useEffect(()=>{
        fetch("https://lmsofmasai.herokuapp.com/lectures").then(res=>res.json()).then(data=>setData(data))
    },[])



    return(
        <div>
            <Nabvar/>
            <div className="lec">
                <p>Lectures</p>
            </div>
            {data.map((e)=>{
                return(
                    <div className="lec-content">
                    <div className="lec-sub">
                        <p>{e.title}<span><button>live</button></span> </p>
                        <p><span>{e.Instructor}</span>  Scheduled <span>{e.type}</span>  at <span>{e.date}</span> - <span>{e.time}</span></p>
                        
                    </div>
                    <button>Absent</button>
                </div>
                )
            })}
            <div className="lec-content">
                <div className="lec-sub">
                    <p>scrum 09.08.2022  <span><button>live</button></span> </p>
                    <p><span>Nrupul</span>  Scheduled <span>Scrum</span>  at <span>9 Aug, 22 </span> - <span> 9:00 am</span></p>
                </div>
                <button>Absent</button>
            </div>
            <div className="lec-content">
                <div className="lec-sub">
                    <p>Weekly connect call  <span><button>live</button></span> </p>
                    <p><span>Yogesh</span>  Scheduled <span>Scrum</span>  at <span>7 Aug, 22 </span> - <span> 12:00 pm</span></p>
                </div>
                <button>Absent</button>
            </div>
        </div>
    )
}