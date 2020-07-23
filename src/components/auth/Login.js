import React, { Component } from "react";
import AuthService from "./auth-service";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from 'react-toastify';

class Login extends Component {
  state = {
    username: "",
    password: "",
  };
  service = new AuthService();

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { username, password } = this.state;
    this.service.login(username, password).then((response) => {
      this.props.setCurrentUser(response);

      this.setState({ username: "", password: "" });
      localStorage.setItem("loggedin", true);
      this.props.history.push("/");
    }).catch(error =>{
      toast(`${error}`)
    });
  };

  render() {
    return (
<div className="container">
        <form onSubmit={this.handleFormSubmit}>
          <div className="row">
            <div className="form-group col-sm-6 col-md-3 offset-md-4">
                <label>Username:</label>
                <input
                  type="text"
                  name="username"
                  className="form-control"
                  placeholder="Your Username"
                  value={this.state.username}
                  onChange={this.handleChange}
                />
            </div>
          </div>
          <div className="row">
            <div className="form-group col-sm-6 col-md-3 offset-md-4">
                  <label>Password:</label>
                  <input
                    type ="password"
                    name="password"
                    className="form-control"
                    placeholder="Your Password"
                    value={this.state.password}
                    onChange={this.handleChange}
                  />
            </div>
          </div>
          <div className="form-group col-sm-6 col-md-3 offset-md-4">
            <button
              type="submit"
              className="btn btn-info"
              value="users-edit">
              Login
            </button>
          </div>
        </form>
        <div className="form-group col-sm-6 col-md-3 offset-md-4">
          <p>
            Don't have account?
            <Link to={"/signup"}> Signup</Link>
          </p>
        </div>
        <ToastContainer />
      </div>
    );
  }
}

export default Login;
