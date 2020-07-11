import React, { Component } from "react";
import AuthService from "./auth-service";
import { Link } from "react-router-dom";

class Signup extends Component {
  state = {
    username: "",
    password: "",
    email: "",
    dateOfBirth: "",
    firstName: "",
    lastName: "",
  };
  service = new AuthService();

  handleFormSubmit = (event) => {
    event.preventDefault();
    const username = this.state.username;
    const password = this.state.password;
    const email = this.state.email;
    const dateOfBirth = this.state.dateOfBirth;
    const firstName = this.state.firstName;
    const lastName = this.state.lastName;
    this.service
      .signup(username, password, email, dateOfBirth, firstName, lastName)
      .then((response) => {
        this.setState({
          username: "",
          password: "",
          email: "",
          dateOfBirth: "",
          firstName: "",
          lastName: "",
        });
        this.props.setCurrentUser(response);
        this.props.history.push("/courses")
      })
      .catch((error) => console.log(error));
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };
  render() {
    return (
      <div>
        <form onSubmit={this.handleFormSubmit}>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
          />
          <label>Password:</label>
          <input
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
          <label>Email:</label>
          <input
            type="text"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <label>Date of Birth:</label>
          <input
            type="date"
            name="dateOfBirth"
            value={this.state.dateOfBirth}
            onChange={this.handleChange}
          />
          <label>First Name:</label>
          <input
            type="text"
            name="firstName"
            value={this.state.firstName}
            onChange={this.handleChange}
          />
          <label>Last Name:</label>
          <input
            type="text"
            name="lastName"
            value={this.state.lastName}
            onChange={this.handleChange}
          />
          <input type="submit" value="Signup" />
        </form>
        <p>
          Already have account?
          <Link to={"/login"}> Login</Link>
        </p>
      </div>
    );
  }
}
export default Signup;
