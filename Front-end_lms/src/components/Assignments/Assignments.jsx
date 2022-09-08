import { useState } from "react"
import { useEffect } from "react"
import { Nabvar } from "../Navbar/Navbar"

export const Assignments=()=>{
    const [data,setData]=useState([])


    useEffect(()=>{
        fetch("https://lmsofmasai.herokuapp.com/assignments").then(res=>res.json()).then(data=>setData(data))
    },[])



    return(
        <div>
            <Nabvar/>
            <div className="lec">
                <p>Assignments</p>
            </div>
            {data.map((e)=>{
                return(
                    <div className="lec-content">
                    <div className="lec-sub">
                        <p>{e.title}<span><button>{e.category}</button></span> </p>
                        <p><span>{e.Instructor}</span>  Created <span>{e.type}</span>  at <span>{e.date}</span> - <span>{e.time}</span></p>
                        
                    </div>
                </div>
                )
            })}
           
        </div>
    )
}