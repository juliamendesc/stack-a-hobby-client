import React, { Component } from "react";
import "./App.css";
import 'react-toastify/dist/ReactToastify.css';
import { Switch, Route, Redirect } from "react-router-dom";
import AuthService from "./components/auth/auth-service";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import UserDetails from './components/Profiles/User-details';
import UserEdit from './components/Profiles/User-edit';
import Topbar from "./components/Topbar";
import About from './components/About.js';
import CoursesList from "./components/courses/CoursesList";
import CourseDetails from "./components/courses/CourseDetails";
import EditCourse from "./components/courses/EditCourse";

class App extends Component {
  state = {
    loggedInUser: null,
  };
  service = new AuthService();

  setCurrentUser = (userObj) => {
    this.setState({
      loggedInUser: userObj,
    });
  };

  componentDidMount() {
    this.fetchUser();
  }

  fetchUser = () => {
    if(this.state.loggedInUser === null) {
      this.service.loggedin() 
        .then(response => {
          if (response._id) {
            this.setCurrentUser(response);
          } else {
            localStorage.clear();
          }
        })
    }
  }

  render() {
    return (
      <div className="App">
        <Topbar
          setCurrentUser={this.setCurrentUser}
          loggedInUser={this.state.loggedInUser}
        />
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
            path="/user-details"
            render={(props) => (
              <UserDetails setCurrentUser={this.setCurrentUser} loggedInUser={this.state.loggedInUser} {...props} />
            )}
          />
          <Route
            exact
            path="/users-edit"
            render={(props) => (
                <UserEdit setCurrentUser={this.setCurrentUser} loggedInUser={this.state.loggedInUser} {...props} />
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
            render={(props) => {
              if (this.state.loggedInUser) {
                return (
                    <CourseDetails
                      {...props}
                      loggedInUser={this.state.loggedInUser}
                    />
                )} else {
                  return <Redirect to="/login" />;
                } 
            }}
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
          <Route
            exact
            path="/about"
            render={(props) => (
              <About setCurrentUser={this.setCurrentUser} {...props} />
            )}
          />
        </Switch>
      </div>
    );
  }
}

export default App;
