import React, { Component } from "react";
import AuthService from "./auth/auth-service";

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
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="/">
            <img
              className="img-fluid"
              src="https://res.cloudinary.com/jmc10/image/upload/v1594927766/myFolder/logo_roboto_mjlb8q.png"
              alt="Responsive image"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                <a className="nav-link" href="/">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/courses">
                  Courses
                </a>
              </li>
            </ul>
            <span className="navbar-text">
              <a className="nav-link" href="/user-details">
              Welcome {this.props.loggedInUser.firstName}
                {this.props.loggedInUser.lastName} (My account)
              </a>
            </span>
            <span className="navbar-text">
              <a
                className="nav-link"
                href="/"
                onClick={() => this.logoutUser()}
              >
                Logout
              </a>
            </span>
          </div>
        </nav>
      );
    } else {
      return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="/">
            <img
              className="img-fluid"
              src="https://res.cloudinary.com/jmc10/image/upload/v1594927766/myFolder/logo_roboto_mjlb8q.png"
              alt="Responsive image"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item active">
                <a className="nav-link" href="/">
                  Home <span className="sr-only">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about">
                  About
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/courses">
                  Courses
                </a>
              </li>
            </ul>
            <span className="navbar-text">
              <a href="/login">
                <button type="button" className="btn btn-outline-secondary">
                  Login
                </button>
              </a>
            </span>
            <span className="navbar-text">
              <a href="/login-google">
                <button type="button" className="btn btn-outline-secondary">
                  Login using Google
                </button>
              </a>
            </span>
            <span className="navbar-text">
              <a href="/signup">
                <button type="button" className="btn btn-dark">
                  Signup
                </button>
              </a>
            </span>
          </div>
        </nav>
      );
    }
  }
}

export default Topbar;
