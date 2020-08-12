import React, { Component } from "react";
import { Link } from "react-router-dom";
import Logo from "./logo.png";
import "./SigninSignup.css";

class SigninSignup extends Component {
  constructor() {
    super();
    this.state = {
      name: "",
      email: "",
      password: "",
    };
  }

  handleSubmit = (e) => {
    console.log(this.state.name)
    console.log(this.state.email)
    console.log(this.state.password)
    e.preventDefault();
  };
  handleChange = (e) => {
    this.setState({
      name: e.target.value,
    });
  };
  handleChangeTwo = (e) => {
    this.setState({
      email: e.target.value,
    });
  };
  handleChangeThree = (e) => {
    this.setState({
      password: e.target.value,
    });
  };

  render() {
    return (
      <div className="my-card">
        <div className="card carded input-field">
          <div>
            <img src={Logo} alt="" />
          </div>
          <form>
            <div className="form-group">
              <label>Name</label>
              <input
                type="text"
                // name = "name"
                className="form-control"
                value={this.state.name}
                onChange={this.handleChange}
                
              />
            </div>
            <div className="form-group">
              <label>Email address</label>
              <input
                type="email"
                className="form-control"
                // name ="email"
                aria-describedby="emailHelp"
                value={this.state.email}
                onChange={this.handleChangeTwo}
                
              />
              <small id="emailHelp" className="form-text text-muted">
                We'll never share your email with anyone else.
              </small>
            </div>
            <div className="form-group">
              <label>Password</label>
              <input
                type="password"
                // name = "password"
                value={this.state.password}
                className="form-control"
                onChange={this.handleChangeThree}
              />
            </div>
            <div>
              <button onClick={this.handleSubmit} type="submit" className="btn btn-primary">
                Sign Up
              </button>

              <Link to="/signin">
                <h6>Sign in if you have an account</h6>
              </Link>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SigninSignup;
