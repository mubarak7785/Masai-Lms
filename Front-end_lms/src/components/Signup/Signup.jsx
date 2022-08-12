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
  };

  useEffect(() => {
    if (data.token) navigate("/");
  }, [data]);

  // const loginpage=()=>{
  //   <Link to="/login"></Link>
  // }
  return (
    <div>
      <div className="loginbtn">
       <Link to="/"><button>Go to Login</button></Link>
      </div>
      <div className="signup">
        <div className="form_container">
          <form id="signup_form" onSubmit={senddata}>
            <label id="lab">First Your First Name</label>
            <br />
            <input
              className="signinp"
              type="text"
              id="name"
              onChange={handlechange}
              required
            />
            <br />
            <br />
            <label id="lab">Last Your Last Name</label>
            <br />
            <input
              className="signinp"
              type="text"
              id="sir_name"
              onChange={handlechange}
              required
            />
            <br />
            <br />
            <label id="lab">Enter Your Email Id</label>
            <br />
            <input
              className="signinp"
              type="text"
              id="email"
              onChange={handlechange}
              required
            />
            <br />
            <br />
            <label id="lab">Enter Your New Password</label>
            <br />
            <input
              className="signinp"
              type="text"
              id="password"
              onChange={handlechange}
              required
            />
            <br />
            <br />
            <label id="lab">Enter Your Mobile Number</label>
            <br />
            <input
              className="signinp"
              type="text"
              id="mobile_number"
              onChange={handlechange}
              required
            />
            <br />
            <br />
            <input id="subbtn" type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
};
