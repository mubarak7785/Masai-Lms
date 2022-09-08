import "./Admin.css";

import { Nabvar } from "../Navbar/Navbar";
import { useState } from "react";

export const Admin = () => {
  const [admindata, setAdmindata] = useState({});
  const [lecturedata ,setLecturedata]=useState({});
  const [data,setData]=useState({})
  const [ldata,setLdata]=useState({})

  const handleChange = (e) => {
    const { id, value } = e.target;
    setAdmindata({ ...admindata, [id]: value });
  };

  const handleChange1 = (e) => {
    const { id, value } = e.target;
    setLecturedata({ ...lecturedata, [id]: value });
  };

  const postdata=(e)=>{
    e.preventDefault();
    fetch("https://lmsofmasai.herokuapp.com/assignments",{
      method:"POST",
      body : JSON.stringify(admindata),
      headers: { "content-type": "application/json" },
    })
    .then(Response=>Response.json())
    .then((data) => {
      setData(data);
    })
    if(data){
      alert("Assignment is added !")
    }
    
  }

  const postdata1=(e)=>{
    e.preventDefault();
    fetch("https://lmsofmasai.herokuapp.com/lectures",{
      method:"POST",
      body : JSON.stringify(lecturedata),
      headers: { "content-type": "application/json" },
    })
    .then(Response=>Response.json())
    .then((data) => {
      setLdata(data);
    })
    if(data){
      alert("Lecture is added !")
    }
    
  }


  return (
    <div>
      <Nabvar />
      <div className="lec">
        <p>Admin's Page</p>
      </div>
      <h2>Add  Assignments</h2>
      <div className="main-admin-div">
        <div className="title-div">
          <p>Title</p>
          <input type="text" id="title" onChange={handleChange} />
        </div>
        <div className="mid-div">
          <div>
            <p>Category</p>
            <select name="" id="category" onChange={handleChange}>
              <option value="">Choose</option>
              <option value="Coding">Coding</option>
              <option value="Fullstack">Fullstack</option>
              <option value="Dsa">Dsa</option>
              <option value="Oj">Oj</option>
            </select>
          </div>
          <div>
            <p>TYPE</p>
            <select name="" id="type" onChange={handleChange}>
              <option value="">Choose</option>
              <option value="Project">Project</option>
              <option value="Practice">Practice</option>
              <option value="Assignment">Assignment</option>
              <option value="Evaluation">Evaluation</option>
            </select>
          </div>
          <div>
            <p>Instructor</p>
            <select name="" id="Instructor" onChange={handleChange}>
              <option value="">Choose</option>
              <option value="Swanand">Swanand</option>
              <option value="Rahul">Rahul</option>
              <option value="Sobin O">Sobin O</option>
              <option value="Nrupul">Nrupul</option>
              <option value="Vishakha">Vishakha</option>
              <option value="Albert">Albert</option>
            </select>
          </div>
        </div>
        <div className="mid-div">
          <div>
            <p>Scheduled</p>
            <input type="date" id="date" onChange={handleChange} />
          </div>
          <div>
            <p>Optional</p>
            <select name="" id="optional" onChange={handleChange}>
              <option value="">Choose</option>
              <option value="No">No</option>
              <option value="Yes">Yes</option>
            </select>
          </div>
          <div>
            <p>Time</p>
            <input type="time" id="time" onChange={handleChange} />
          </div>
        </div>
        <button onClick={postdata}>Add</button>
      </div>
      <br />
      <h2>Add  Lectures</h2>
      <div className="main-admin-div">
        <div className="title-div">
          <p>Title</p>
          <input type="text" id="title" onChange={handleChange1} />
        </div>
        <div className="mid-div">
          <div>
            <p>Category</p>
            <select name="" id="category" onChange={handleChange1}>
              <option value="">Choose</option>
              <option value="Scrum">Scrum</option>
              <option value="General">General</option>
              <option value="Skillathon">Skillathon</option>
              <option value="Coading">Coading</option>
            </select>
          </div>
          <div>
            <p>TYPE</p>
            <select name="" id="type" onChange={handleChange1}>
              <option value="">Choose</option>
              <option value="Live">Live</option>
              <option value="Video">Video</option>
              <option value="Reading">Reading</option>
              
            </select>
          </div>
          <div>
            <p>Instructor</p>
            <select name="" id="Instructor" onChange={handleChange1}>
              <option value="">Choose</option>
              <option value="Swanand">Swanand</option>
              <option value="Rahul">Rahul</option>
              <option value="Sobin O">Sobin O</option>
              <option value="Nrupul">Nrupul</option>
              <option value="Vishakha">Vishakha</option>
              <option value="Albert">Albert</option>
            </select>
          </div>
        </div>
        <div className="mid-div">
          <div>
            <p>Scheduled</p>
            <input type="date" id="date" onChange={handleChange1} />
          </div>
          <div>
            <p>Optional</p>
            <select name="" id="optional" onChange={handleChange1}>
              <option value="">Choose</option>
              <option value="No">No</option>
              <option value="Yes">Yes</option>
            </select>
          </div>
          <div>
            <p>Time</p>
            <input type="time" id="time" onChange={handleChange1} />
          </div>
        </div>
        <button onClick={postdata1}>Add</button>
      </div>
    </div>
  );
};
