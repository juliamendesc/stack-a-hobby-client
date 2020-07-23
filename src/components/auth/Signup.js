import React, { Component } from "react";
import AuthService from "./auth-service";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import axios from "axios";

class Signup extends Component {
  state = {
    username: "",
    password: "",
    email: "",
    dateOfBirth: "",
    firstName: "",
    lastName: "",
    isTeacher: "",
  };
  service = new AuthService();

  handleFormSubmit = (event) => {
    event.preventDefault();
    const {
      username,
      password,
      email,
      dateOfBirth,
      firstName,
      lastName,
      file,
      isTeacher,
      dropDownValue,
    } = this.state;
    // const isTeacher = false;
    const uploadData = new FormData();
    uploadData.append("imageUrl", file);
    axios
      .post("https://stack-a-hobby.herokuapp.com/api/upload", uploadData)
      .then((response) => {
        this.service
          .signup(
            username,
            password,
            email,
            dateOfBirth,
            firstName,
            lastName,
            response.data.imageUrl,
            isTeacher,
            dropDownValue
          )
          .then((response) => {
            this.setState({
              username: "",
              password: "",
              email: "",
              dateOfBirth: "",
              firstName: "",
              lastName: "",
              isTeacher: "",
              dropDownValue: "",
            });
            this.props.setCurrentUser(response);
            this.props.history.push("/courses");
          })
          .catch((error) => {
            toast(`${error}`);
          });
      });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  // //Upload photos Change - Axios as well - HUGO
  handleFileChange = (event) => {
    this.setState({ file: event.target.files[0] });
  };

  handleSubmit = (event) => {
    event.preventDefault();
  };

  handleChangeValue(e) {
    this.setState({ dropDownValue: e.currentTarget.textContent });
  }

  render() {
    return (
      <div className="container">
        <form onSubmit={this.handleFormSubmit}>
          <div className="row">
            <div className="form-group col-sm-6 col-md-3 offset-md-3">
              <label>Username:</label>
              <input
                type="text"
                name="username"
                className="form-control"
                value={this.state.username}
                placeholder="Username"
                onChange={this.handleChange}
                required
              />
            </div>
            <div className="col-sm-6 col-md-3">
              <label>Password:</label>
              <input
                name="password"
                type="password"
                className="form-control"
                value={this.state.password}
                placeholder="Password"
                onChange={this.handleChange}
                required
              />
            </div>
          </div>
          <div className="row">
            <div className="form-group col-sm-12 col-md-6 offset-md-3">
              <label>Email:</label>
              <input
                type="email"
                name="email"
                className="form-control"
                placeholder="your.email@stack-a-hobby.com"
                value={this.state.email}
                onChange={this.handleChange}
                required
              />
            </div>
          </div>
          <div className="row">
            <div className="form-group col-sm-12 col-md-6 offset-md-3">
              <label>Date of Birth:</label>
              <input
                type="date"
                name="dateOfBirth"
                className="form-control"
                value={this.state.dateOfBirth}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="row">
            <div className="form-group col-sm-12 col-md-6 offset-md-3">
              <label>First Name:</label>
              <input
                type="text"
                name="firstName"
                placeholder="John"
                className="form-control"
                value={this.state.firstName}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="row">
            <div className="form-group col-sm-12 col-md-6 offset-md-3">
              <label>Last Name:</label>
              <input
                type="text"
                name="lastName"
                className="form-control"
                placeholder="Doe"
                value={this.state.lastName}
                onChange={this.handleChange}
              />
            </div>
          </div>
          <div className="row">
            <div className="form-group col-sm-12 col-md-6 offset-md-3">
              <label>Profile Image</label>
              <input
                type="file"
                className="form-control-file"
                onChange={this.handleFileChange}
              />
            </div>
          </div>
          <button type="submit" className="btn btn-info" value="Signup">
            Signup
          </button>
        </form>
        <div className="form-group col-sm-12 col-md-6 offset-md-3">
          <p>
            Already have account?
            <Link to={"/login"}> Login</Link>
          </p>
        </div>
        <ToastContainer />
      </div>
    );
  }
}
export default Signup;
