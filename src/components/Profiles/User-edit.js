import React, { Component } from "react";
import axios from "axios";
import AuthService from "../auth/auth-service";
import { Col, Row, Button, Form, FormGroup, Label, Input } from "reactstrap";
import { ToastContainer } from "react-toastify";

class UserEdit extends Component {
  state = {
    email: "",
    dateOfBirth: "",
    firstName: "",
    lastName: "",
    imageUrl: "",
    file: ""
  };
  service = new AuthService();

  handleFileChange = (event) => {
    this.setState({ file: event.target.files[0]});
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
      <div>
        <Form onSubmit={this.handleFormSubmit}>
 
          <Row form>
            <Col sm="12" md={{ size: 6, offset: 3 }}>
              <FormGroup>
                <Label>Email</Label>
                <Input
                  
                  type="email"
                  placeholder={loggedInUser && loggedInUser.email}
                  name="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                  required
                />
              </FormGroup>
            </Col>
          </Row>
          <Row form>
            <Col sm="12" md={{ size: 6, offset: 3 }}>
              <FormGroup>
                <Label>Date of Birth</Label>
                <Input
                  type="date"
                  name="dateOfBirth"
                  value={this.state.dateOfBirth}
                  onChange={this.handleChange}
                  required
                />
              </FormGroup>
            </Col>
          </Row>
          <Row form>
            <Col sm="12" md={{ size: 6, offset: 3 }}>
              <FormGroup>
                <Label>First Name</Label>
                <Input
                  type="text"
                  name="firstName"
                  placeholder="John"
                  value={this.state.firstName}
                  onChange={this.handleChange}
                  required
                />
              </FormGroup>
            </Col>
          </Row>
          <Row form>
            <Col sm="12" md={{ size: 6, offset: 3 }}>
              <FormGroup>
                <Label>Last Name</Label>
                <Input
                  type="text"
                  name="lastName"
                  placeholder="Doe"
                  value={this.state.lastName}
                  onChange={this.handleChange}
                  required
                />
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
