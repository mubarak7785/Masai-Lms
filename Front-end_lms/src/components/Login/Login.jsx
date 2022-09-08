import { Link } from "react-router-dom";
import { useState } from "react";
import { loginfailure, loginsuccess } from "../Redux/Login_Redux/Login_Action";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "./Login.css";
// import { store } from '../Redux/Store'

export const Login = () => {
  const navigate = useNavigate();
  const [logindata, setLoginupdata] = useState({});
  const dispatch = useDispatch();

  const handlechange = (e) => {
    const { id, value } = e.target;
    setLoginupdata({ ...logindata, [id]: value });
  };

  const senddata = (e) => {
    e.preventDefault();
    dispatch(loginfailure());
    fetch("https://nikedataapi.herokuapp.com/login", {
      method: "POST",
      body: JSON.stringify(logindata),
      headers: { "content-type": "application/json" },
    })
      .then((Response) => Response.json())
      .then((data) => {
        dispatch(loginsuccess(data));
        if (data.token){
          alert("Logged in successfully!");
          navigate("/home");
        }
        else {
          alert("enter correct details");
        }
      })
      .catch((e) => {
        dispatch(loginfailure);
      });
  };

  return (
    <div className="login">
     
      <div className="form_container1">
       
      <div className="img-div">
          <img src="https://sso.masaischool.com/brand_dark.svg" alt="" />
          </div>
          <h2>Login</h2>
        <form onSubmit={senddata}>
          <label className="label" id="lab">Email</label>
          <br />
          <br />
          <input type="text" placeholder="Email address" id="email" onChange={handlechange} />
          <br />
          <br />

          <label id="lab">Password</label>
          <br />
          <br />
          <input type="password" placeholder="Password" id="password" onChange={handlechange} />
          <br />
          <br />
          <h4>Don't Have an account?<Link to="/signup">Register Here</Link></h4>
          <br />
          <input id="subbtn" type="submit" />
        </form>
      </div>
    </div>
  );
};
