import React, { Component } from "react";
import { Link } from "react-router-dom";
import AuthService from "./auth/auth-service";
import Button from 'react-bootstrap/Button';

class Navbar extends Component {
  service = new AuthService();

  logoutUser = () => {
      this.service.logout()
          .then(() => {
              this.props.setCurrentUser(null);
              localStorage.clear();
          })
  }

  render() {
    if (this.props.loggedInUser) {
      console.log("navbar loggeduser", this.props.loggedInUser);
      return (
        <nav>
          <ul>
            <li>Welcome {this.props.loggedInUser.username}</li>
              <Link to="/courses"><Button variant="link">Courses</Button></Link>
              <Link to="/about"> <Button variant="link">About</Button></Link>
              <Link to="/">
              <Button variant="link" onClick={() => this.logoutUser()}>Logout</Button>
              </Link>
          </ul>
        </nav>
      );
    } else {
      return (
        <nav>
          <ul>
            <Link to="/about"> <Button variant="link">About</Button></Link>
            <Link to="/login"><Button variant="link">Login</Button></Link>
            <Link to="/signup"><Button variant="dark">Signup</Button></Link>
          </ul>
        </nav>
      );
    }
  }
}

export default Navbar;
