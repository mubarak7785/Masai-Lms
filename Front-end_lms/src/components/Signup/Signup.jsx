import "./Signup.css";
import { useEffect, useState } from "react";
import { Link, Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

export const Signup = () => {
  const [signupdata, setSignupdata] = useState({});
  const navigate = useNavigate();
  const [data, setData] = useState({});
  const handlechange = (e) => {
    const { id, value } = e.target;
    setSignupdata({ ...signupdata, [id]: value });
  };

  const senddata = (e) => {
    e.preventDefault();

    fetch("https://nikedataapi.herokuapp.com/register", {
      method: "POST",
      body: JSON.stringify(signupdata),
      headers: { "content-type": "application/json" },
    })
      .then((Response) => Response.json())
      .then((data) => {
        setData(data);
      });
      if(!data.token){
        alert("You have already signed up! Please login")
      }
  };

 
  useEffect(() => {
    if (data.token) navigate("/");
  }, [data]);

  // const loginpage=()=>{
  //   <Link to="/login"></Link>
  // }
  return (
    <div>
     
      <div className="signup">
      
        <div className="form_container2">
          <div className="img-div">
          <img src="https://sso.masaischool.com/brand_dark.svg" alt="" />
          </div>
        <h2>SignUp</h2>
          <form id="signup_form" onSubmit={senddata}>
            <label id="lab">First Name</label>
            <br />
            <input
              placeholder="First Name"
              className="signinp"
              type="text"
              id="name"
              onChange={handlechange}
              required
            />
            <br />
            <br />
            <label id="lab">Last Name</label>
            <br />
            <input
              placeholder="Last Name"
              className="signinp"
              type="text"
              id="sir_name"
              onChange={handlechange}
              required
            />
            <br />
            <br />
            <label id="lab">Email Id</label>
            <br />
            <input
              placeholder="Email"
              className="signinp"
              type="text"
              id="email"
              onChange={handlechange}
              required
            />
            <br />
            <br />
            <label id="lab">Password</label>
            <br />
            <input
              placeholder="Password"
              className="signinp"
              type="password"
              id="password"
              onChange={handlechange}
              required
            />
            <br />
            <br />
            <label id="lab">Mobile Number</label>
            <br />
            <input
              placeholder="Number"
              className="signinp"
              type="text"
              id="mobile_number"
              onChange={handlechange}
              required
            />
            <br />
            <br />
            <h4>Already have an account?<Link to="/">Login Here</Link></h4>
            <br />
            <input id="subbtn1" type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
};
