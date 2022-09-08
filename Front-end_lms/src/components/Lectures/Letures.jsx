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
        </div>
    )
}