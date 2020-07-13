import React, { Component } from "react";
import AuthService from "./auth-service";
import { Link } from "react-router-dom";
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { ToastContainer, toast } from 'react-toastify';
import axios from 'axios';


class Signup extends Component {
  state = {
    username: "",
    password: "",
    email: "",
    dateOfBirth: "",
    firstName: "",
    lastName: "",
    imageUrl: "",
    name: "",
    description: "",
    file: "",
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
    const imageUrl = this.state.imageUrl;
    const name = this.state.name;
    const description = this.state.description;
    const file = this.state.file;

    
    this.service
      .signup(username, password, email, dateOfBirth, firstName, lastName, imageUrl, name, description, file)
      .then((response) => {
        this.setState({
          username: "",
          password: "",
          email: "",
          dateOfBirth: "",
          firstName: "",
          lastName: "",
          imageUrl:"",
          name: "",
          description:"",
          file:"",
        });
        this.props.setCurrentUser(response);
        this.props.history.push("/courses")
      })
      .catch(error =>{
        toast(`${error}`)
      })
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

//Upload photos Change - Axios as well - HUGO
  handleFileChange = (event) => {
    this.setState({ file: event.target.files[0]});
}

  handleSubmit = (event) => {
    event.preventDefault();
    const uploadData = new FormData();
    uploadData.append("imageUrl", this.state.file);
    axios.post('https://stack-a-hobby.herokuapp.com/api//upload', uploadData)
        .then((response) => {
            console.log('image uploaded', response);
            
            axios.post('https://stack-a-hobby.herokuapp.com/api//images/create', {
              name: this.state.name,
              description: this.state.description,
              imageUrl: response.data.imageUrl
            })
            .then((response) => {
                console.log('image created', response);
                this.setState({ name: '', description: '', file: '', feedbackMessage: 'Image uploaded sucessfully'});
            })
        })
}  


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

          <Row form>
            <Col sm="12" md={{ size: 6, offset: 3 }}>
              <FormGroup>
              <Label>Profile Image</Label>
          {/* <Input
            type="file"
            name="imageurl"
            value={this.state.imageUrl}
            onChange={this.handleChange}
            
          /> */}
                      <Col sm="12" md={{ size: 6, offset: 3 }}>
     <Input type="file" onChange={this.handleFileChange && this.handleSubmit}  /> 
     </Col>
              </FormGroup>
            </Col>
          </Row>

          <Button color="primary" type="submit" value="Signup" >Signup</Button>

        </Form>
        <p>
          Already have account?
          <Link to={"/login"}> Login</Link>
        </p>
        <ToastContainer />
      </div>
    );
  }
}
export default Signup;
