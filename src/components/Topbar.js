import React, { Component } from "react";
import AuthService from "./auth/auth-service";
import { Navbar, Nav, Form, FormControl, Button } from "react-bootstrap";

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
          <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Navbar.Brand href="/">
                <img
                  src="https://res.cloudinary.com/jmc10/image/upload/v1594927766/myFolder/logo_roboto_mjlb8q.png"
                  alt="logo"
                />
              </Navbar.Brand>
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
                <Nav.Link href="/user-details">
                  Welcome {this.props.loggedInUser.firstName}{" "}
                  {this.props.loggedInUser.lastName}
                </Nav.Link>
                <Nav.Link onClick={() => this.logoutUser()}>Logout</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      );
    } else {
      return (
        <div>
          <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Navbar.Brand href="/">
                <img
                  src="https://res.cloudinary.com/jmc10/image/upload/v1594927766/myFolder/logo_roboto_mjlb8q.png"
                  alt="logo"
                />
              </Navbar.Brand>
              <Nav className="mr-auto">
                <Nav.Link href="/">Home</Nav.Link>
                <Nav.Link href="/about">About</Nav.Link>
                <Nav.Link href="/courses">Courses</Nav.Link>
              </Nav>
              <Nav className="justify-content-end">
                <Nav.Link href="/login">
                  {" "}
                  <Button variant="light">Login</Button>
                </Nav.Link>
                <Nav.Link href="/signup">
                  <Button variant="dark">Signup</Button>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      );
    }
  }
}

export default Topbar;
