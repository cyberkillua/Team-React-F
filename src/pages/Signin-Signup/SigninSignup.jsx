import React from "react";
import { Link } from "react-router-dom";
import Logo from "./logo.png";
import "./SigninSignup.css";

const SigninSignup = (props) => {
  return (
    <div className="my-card">
      <div className="card carded input-field">
        <div>
          <img src={Logo} alt="" />
        </div>
        <div className="form-group">
          <label>Email address</label>
          <input
            type="email"
            className="form-control"
            name ="email"
            aria-describedby="emailHelp"
          />
          <small id="emailHelp" className="form-text text-muted">
            We'll never share your email with anyone else.
          </small>
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            name = "password"
          />
        </div>

        <div>
          <button 
          onClick={()=>{

          }}
          type="submit" className="btn btn-primary">
            Sign In
          </button>
          <Link to="/signup">
            <h6>Sign up if you dont have an account</h6>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SigninSignup;
