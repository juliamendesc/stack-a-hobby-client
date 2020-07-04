import React, {Component} from 'react';
import './App.css';
import CoursesList from './components/courses/CoursesList';
import logo from './logo.svg';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from './components/courses/auth/Login';
import Signup from './components/courses/auth/Signup';
import AuthService from './components/courses/auth/auth-service';
import Navbar from './components/Navbar';


class App extends Component {
  state={
    loggedInUser:null
  }
  service = new AuthService();

setCurrentUser = (userObj) =>{
  this.setState({
    loggedInUser:userObj
  })
}

fetchUser = () => {
  if(this.state.loggedInUser === null) {
    this.service.loggedin() 
      .then(response => {
        if (response._id) {
          this.setState({
            loggedInUser: response
          })
        }
      })
  }
}
  render(){
    this.fetchUser();
  return (
    <div className="App">
      <CoursesList />
      <Navbar setCurrentUser={this.setCurrentUser} loggedInUser={this.state.loggedInUser} />
      <Switch>
          <Route path='/login' render={(props) => <Login setCurrentUser={this.setCurrentUser} {...props} /> } />
          <Route exact path='/signup' render={(props) => <Signup setCurrentUser={this.setCurrentUser} {...props} /> } />
        </Switch>
    </div>
  );
}
}

export default App;
