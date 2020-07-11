import React, { Component } from "react";
import { Link } from "react-router-dom";
import AuthService from "./auth/auth-service";
import Button from "react-bootstrap/Button";
import "./Navbar.css";

class Navbar extends Component {
  service = new AuthService();

  logoutUser = () => {
    this.service.logout().then(() => {
      this.props.setCurrentUser(null);
      localStorage.clear();
    });
  };

  render() {
    if (this.props.loggedInUser) {
      console.log("navbar loggeduser", this.props.loggedInUser);
      return (
        <div>
          <nav className="navbar">
            <h2 className="logo">Stack-a-hobby</h2>
            <h2 className="welcome-user">Welcome {this.props.loggedInUser.username}</h2>
            <Link to="/courses">
              <Button variant="link">Courses</Button>
            </Link>
            <Link to="/about">
              {" "}
              <Button variant="link">About</Button>
            </Link>
            <Link to="/">
              <Button variant="link" onClick={() => this.logoutUser()}>
                Logout
              </Button>
            </Link>
          </nav>
        </div>
      );
    } else {
      return (
        <nav>
          <h1 className="logo">Stack-a-hobby</h1>

          <Link to="/about">
            {" "}
            <Button variant="link">About</Button>
          </Link>
          <Link to="/login">
            <Button variant="link">Login</Button>
          </Link>
          <Link to="/signup">
            <Button variant="dark">Signup</Button>
          </Link>
        </nav>
      );
    }
  }
}

export default Navbar;
