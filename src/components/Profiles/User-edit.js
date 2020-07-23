import React, { Component } from "react";
import axios from "axios";
import AuthService from "../auth/auth-service";
import { ToastContainer } from "react-toastify";

class UserEdit extends Component {
  state = {
    email: "",
    dateOfBirth: "",
    firstName: "",
    lastName: "",
    imageUrl: "",
    file: "",
  };
  service = new AuthService();

  handleFileChange = (event) => {
    this.setState({ file: event.target.files[0] });
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const userId = this.props.loggedInUser._id;
    const {
      email,
      dateOfBirth,
      firstName,
      lastName,
      //   file,
    } = this.state;
    // const { params } = this.props.match;
    axios
      .put(`https://stack-a-hobby.herokuapp.com/api/users-edit/${userId}`, {
        email,
        dateOfBirth,
        firstName,
        lastName,
      })
      .then(() => {
        this.props.history.push("/courses");
      });
  };

  render() {
    const loggedInUser = this.props.loggedInUser;
    return (
      <div className="container">
        <h3 className="display-5">Edit your details</h3>
        <form onSubmit={this.handleFormSubmit}>
          <div className="row">
            <div className="form-group col-12 col-md-6 offset-md-3">
              <label>Email</label>
              <input
                type="email"
                className="form-control"
                placeholder={loggedInUser && loggedInUser.email}
                name="email"
                value={this.state.email}
                onChange={this.handleChange}
                required
              />
            </div>
          </div>
          <div className="row">
            <div className="form-group col-12 col-md-6 offset-md-3">
              <label>Date of Birth</label>
              <input
                type="date"
                className="form-control"
                name="dateOfBirth"
                value={this.state.dateOfBirth}
                onChange={this.handleChange}
                required
              />
            </div>
          </div>
          <div className="row">
            <div className="form-group col-12 col-md-6 offset-md-3">
              <label>First Name</label>
              <input
                type="text"
                className="form-control"
                name="firstName"
                placeholder={loggedInUser && loggedInUser.firstName}
                value={this.state.firstName}
                onChange={this.handleChange}
                required
              />
            </div>
          </div>
          <div className="row">
            <div className="form-group col-12 col-md-6 offset-md-3">
              <label>Last Name</label>
              <input
                type="text"
                className="form-control"
                name="lastName"
                placeholder={loggedInUser && loggedInUser.lastName}
                value={this.state.lastName}
                onChange={this.handleChange}
                required
              />
            </div>
          </div>
          <button
            type="submit"
            className="btn btn-outline-info"
            value="users-edit"
          >
            Update
          </button>
        </form>
        <ToastContainer />
      </div>
    );
  }
}

export default UserEdit;
