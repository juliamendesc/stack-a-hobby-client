import React, { Component } from "react";
import "./App.css";
import "react-toastify/dist/ReactToastify.css";
import { Switch, Route, Redirect } from "react-router-dom";
import AuthService from "./components/auth/auth-service";
import Login from "./components/auth/Login";
import Signup from "./components/auth/Signup";
import UserDetails from "./components/Profiles/User-details";
import UserEdit from "./components/Profiles/User-edit";
import Topbar from "./components/Topbar";
import About from "./components/About.js";
import CoursesList from "./components/courses/CoursesList";
import CourseDetails from "./components/courses/CourseDetails";
import EditCourse from "./components/courses/EditCourse";
import LandingPage from "./components/LandingPage";
import FooterPage from "./components/Footer";
import AddComment from "./components/courses/AddComment";
import AddCourse from "./components/courses/AddCourse";

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
    if (this.state.loggedInUser === null) {
      this.service.loggedin().then((response) => {
        if (response._id) {
          this.setCurrentUser(response);
          localStorage.setItem("loggedin", true);
        } else {
          localStorage.clear();
        }
      });
    }
  };

  render() {
    const { loggedInUser } = this.state;
    return (
      <div className="App">
        <Topbar
          setCurrentUser={this.setCurrentUser}
          loggedInUser={loggedInUser}
        />
        <Switch>
          <Route
            exact
            path="/"
            render={(props) => (
              <LandingPage setCurrentUser={this.setCurrentUser} {...props} />
            )}
          />
          <Route
            exact
            path="/about"
            render={(props) => (
              <About setCurrentUser={this.setCurrentUser} {...props} />
            )}
          />
          <Route
            exact
            path="/login"
            render={(props) => (
              <Login setCurrentUser={this.setCurrentUser} {...props} />
            )}
          />
          <Route
            path="/login-google"
            //heroku
            component={() => {
              window.location.href =
                "http://stack-a-hobby.herokuapp.com/api/auth/google";
            }}
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
              <UserDetails
                setCurrentUser={this.setCurrentUser}
                loggedInUser={loggedInUser}
                {...props}
              />
            )}
          />
          <Route
            exact
            path="/users-edit"
            render={(props) => (
              <UserEdit
                setCurrentUser={this.setCurrentUser}
                loggedInUser={loggedInUser}
                {...props}
              />
            )}
          />
          <Route
            exact
            path="/courses"
            render={(props) => (
              <CoursesList
                setCurrentUser={this.setCurrentUser}
                {...props}
                loggedInUser={loggedInUser}
                getAllCourses={this.getAllCourses}
                // localStorage={localStorage.getItem("loggedin")}
              />
            )}
          />
          <Route
            exact
            path="/courses/add-course"
            render={(props) => {
              if (localStorage.getItem("loggedin")) {
                return <AddCourse {...props} loggedInUser={loggedInUser} />;
              } else {
                return <Redirect to="/login" />;
              }
            }}
          />
          <Route
            exact
            path="/courses/:id"
            render={(props) => {
              if (localStorage.getItem("loggedin")) {
                return <CourseDetails {...props} />;
              } else {
                return <Redirect to="/login" />;
              }
            }}
          />
          <Route
            exact
            path="/courses/:id/edit"
            render={(props) => {
              if (localStorage.getItem("loggedin")) {
                return <EditCourse {...props} />;
              } else {
                return <Redirect to="/login" />;
              }
            }}
          />
          <Route
            exact
            path="/courses/:id/comments"
            render={(props) => {
              if (localStorage.getItem("loggedin")) {
                return (
                  <AddComment
                    {...props}
                    loggedInUser={loggedInUser}
                    setCurrentUser={this.setCurrentUser}
                  />
                );
              } else {
                return <Redirect to="/login" />;
              }
            }}
          />
        </Switch>
        <FooterPage />
      </div>
    );
  }
}

export default App;
