import React, { Component } from "react";
import "./App.css";
import { Switch, Route, Redirect } from "react-router-dom";
import Login from "./components/courses/auth/Login";
import Signup from "./components/courses/auth/Signup";
import AuthService from "./components/courses/auth/auth-service";
import CoursesList from "./components/courses/CoursesList";
import Navbar from "./components/Navbar";
import CourseDetails from "./components/courses/CourseDetails";
import EditCourse from "./components/courses/EditCourse";

class App extends Component {
  state = {
    loggedInUser: null,
  };
  service = new AuthService();

  setCurrentUser = (userObj) => {
    this.setState({
      loggedinUser: userObj,
    });
  };

  fetchUser = () => {
    if (this.state.loggedInUser === null) {
      this.service.loggedin().then((response) => {
        if (response._id) {
          this.setState({
            loggedInUser: response,
          });
        }
      });
    }
  };
  render() {
    this.fetchUser();
    return (
      <div className="App">
        <Navbar
          setCurrentUser={this.setCurrentUser}
          loggedInUser={this.state.loggedInUser}
        />
        <CoursesList />
        <Switch>
          <Route
            exact
            path="/login"
            render={(props) => (
              <Login setCurrentUser={this.setCurrentUser} {...props} />
            )}
          />
          <Route
            exact
            path="/signup"
            render={(props) => (
              <Signup setCurrentUser={this.setCurrentUser} {...props} />
            )}
          />
          <Route
            exact
            path="/courses"
            render={(props) => (
              <CoursesList setCurrentUser={this.setCurrentUser} {...props} />
            )}
          />
          <Route
            exact
            path="/courses/:id"
            render={(props) => (
              <CourseDetails
                {...props}
                loggedInUser={this.state.loggedInUser}
              />
            )}
          />
          <Route
            exact
            path="/courses/:id/edit"
            render={(props) => {
              if (this.state.loggedInUser) {
                return <EditCourse {...props} />;
              } else {
                return <Redirect to="/login" />;
              }
            }}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
