import React, { Component } from "react";
import AuthService from "./auth-service";
import { Link } from "react-router-dom";
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';

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
        <Form onSubmit={this.handleFormSubmit}>
          <Row form>
            <Col  sm={6} md={{ size: 3, offset: 3 }}>
              <FormGroup>
              <Label>Username:</Label>
          <Input
            type="text"
            name="username"
            value={this.state.username}
            placeholder ="Username"
            textAlign="center"
            onChange={this.handleChange}
          />
              </FormGroup>
            </Col>
             <Col sm={6} md={{ size: 3, offset: -1 }}>
            <FormGroup>
            <Label>Password:</Label>
          <Input
            name="password"
            value={this.state.password}
            placeholder='Password'
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
            placeholder="your.email@stack-a-hobby.com"
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
          <Button color="primary" type="submit" value="Signup" >Signup</Button>

        </Form>
        <p>
          Already have account?
          <Link to={"/login"}> Login</Link>
        </p>
      </div>
    );
  }
}
export default Signup;
