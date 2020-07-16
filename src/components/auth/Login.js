import React, { Component } from "react";
import AuthService from "./auth-service";
import { Link } from "react-router-dom";
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
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
      <div className="login-form">
        <Form onSubmit={this.handleFormSubmit} style={{width:"80%", margin:"10px auto"}}>
          <Row form >
            <Col
              style={{ width: "80%", margin: "10px auto" }}
              sm={6}
              md={{ size: 3, offset: 4 }}
            >
              <FormGroup>
                <Label>Username:</Label>
                <Input
                  type="text"
                  name="username"
                  placeholder="Your Username"
                  value={this.state.username}
                  onChange={this.handleChange}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row form>
            <Col
              style={{ width: "80%", margin: "10px auto" }}
              sm={6}
              md={{ size: 3, offset: 4 }}
            >
              <FormGroup>
                <Label>Password:</Label>
                <Input
                  name="password"
                  placeholder="Your Password"
                  type="password"
                  value={this.state.password}
                  onChange={this.handleChange}
                />
              </FormGroup>
            </Col>
          </Row>
          <Button color="primary" type="submit" value="Login">
            Login{" "}
          </Button>
        </Form>
        <p>
          Don't have account?
          <Link to={"/signup"}> Signup</Link>
        </p>
        <ToastContainer />
      </div>
    );
  }
}

export default Login;
