import "./Admin.css";

import { Nabvar } from "../Navbar/Navbar";
import { useState } from "react";

export const Admin = () => {
  const [admindata, setAdmindata] = useState({});
  const [data,setData]=useState({})

  const handleChange = (e) => {
    const { id, value } = e.target;
    setAdmindata({ ...admindata, [id]: value });
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
    else{
      alert("ALERTTTTTTT")
    }
    
  }

  console.log(admindata);

  return (
    <div>
      <Nabvar />
      <div className="lec">
        <p>Admin's Page</p>
      </div>

      <h2>Add lectures</h2>
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
    </div>
  );
};
