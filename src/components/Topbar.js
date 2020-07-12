import React, { Component } from "react";
import "./Topbar.css";
import AuthService from "./auth/auth-service";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

class Topbar extends Component {
  service = new AuthService();

  logoutUser = () => {
    this.service.logout().then(() => {
      this.props.setCurrentUser(null);
      localStorage.clear();
    });
  };

  render() {
    if (this.props.loggedInUser) {
      return (
        <div>
          <Navbar bg="light" variant="light">
            <Navbar.Brand href="/">Stack-a-Hobby</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
              <Nav.Link href="/courses">Courses</Nav.Link>
              <Form inline>
                <FormControl
                  type="text"
                  placeholder="Search"
                  className="mr-sm-2"
                />
                <Button variant="outline-info">Search</Button>
              </Form>
            </Nav>
            <Nav className="justify-content-end">
              <Nav.Link href="/userdetails">
                Welcome {this.props.loggedInUser.username}
              </Nav.Link>
              <Nav.Link onClick={() => this.logoutUser()}>Logout</Nav.Link>
            </Nav>
          </Navbar>
        </div>
      );
    } else {
      return (
        <div>
          <Navbar bg="light" variant="light">
            <Navbar.Brand href="/">Stack-a-Hobby</Navbar.Brand>
            <Nav className="mr-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/about">About</Nav.Link>
            </Nav>
            <Nav className="justify-content-end">
              <Nav.Link href="/login"> <Button variant="light">Login</Button></Nav.Link>
              <Nav.Link href="/signup">
                <Button variant="dark">Signup</Button>
              </Nav.Link>
            </Nav>
          </Navbar>
        </div>
      );
    }
  }
}

export default Topbar;
