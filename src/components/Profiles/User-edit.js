import React, { Component } from "react";
import axios from "axios";
import AuthService from "../auth/auth-service";
// import Container from "react-bootstrap/Container";
import { Col, Row, Button, Form, FormGroup, Label, Input } from "reactstrap";
// import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";

class UserEdit extends Component {
  state = {
    username: "",
    password: "",
    email: "",
    dateOfBirth: "",
    firstName: "",
    lastName: "",
  };
  service = new AuthService();

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const userId = this.props.loggedInUser._id;
    const {
      username,
      email,
      dateOfBirth,
      firstName,
      lastName,
    //   file,
    } = this.state;
    // const { params } = this.props.match;
    axios
      .put(`https://stack-a-hobby.herokuapp.com/api/users-edit/${userId}`, {
        username,
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
    return (
      <div>
        <Form onSubmit={this.handleFormSubmit}>
          <Row form>
            <Col sm={6} md={{ size: 3, offset: 3 }}>
              <FormGroup>
                <Label>Username:</Label>
                <Input
                  type="text"
                  name="username"
                  value={this.state.username}
                  placeholder="Username"
                  onChange={this.handleChange}
                />
              </FormGroup>
            </Col>
            <Col sm={6} md={{ size: 3, offset: -1 }}>
              <FormGroup>
                <Label>Password:</Label>
                <Input
                  name="password"
                  type="password"
                  value={this.state.password}
                  placeholder="Password"
                  onChange={this.handleChange}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row form>
            <Col sm="12" md={{ size: 6, offset: 3 }}>
              <FormGroup>
                <Label>Email:</Label>
                <Input
                  type="email"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
              </FormGroup>
            </Col>
          </Row>

          <Row form>
            <Col sm="12" md={{ size: 6, offset: 3 }}>
              <FormGroup>
                <Label>Date of Birth:</Label>
                <Input
                  type="date"
                  name="dateOfBirth"
                  value={this.state.dateOfBirth}
                  onChange={this.handleChange}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row form>
            <Col sm="12" md={{ size: 6, offset: 3 }}>
              <FormGroup>
                <Label>First Name:</Label>
                <Input
                  type="text"
                  name="firstName"
                  placeholder="John"
                  value={this.state.firstName}
                  onChange={this.handleChange}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row form>
            <Col sm="12" md={{ size: 6, offset: 3 }}>
              <FormGroup>
                <Label>Last Name:</Label>
                <Input
                  type="text"
                  name="lastName"
                  placeholder="Doe"
                  value={this.state.lastName}
                  onChange={this.handleChange}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row form>
            <Col sm="12" md={{ size: 6, offset: 3 }}>
              <FormGroup>
                <Label>Profile Image</Label>
                <Col sm="12" md={{ size: 6, offset: 3 }}>
                  <Input type="file" onChange={this.handleFileChange} />
                </Col>
              </FormGroup>
            </Col>
          </Row>

          <Button color="primary" type="submit" value="users-edit">
            Update
          </Button>
        </Form>
        <ToastContainer />
      </div>
    );
  }
}

export default UserEdit;
