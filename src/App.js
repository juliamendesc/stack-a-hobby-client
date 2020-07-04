import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from './components/projects/auth/Login';
import Signup from './components/projects/auth/Signup';
import AuthService from './components/projects/auth/auth-service';
import Navbar from './components/Navbar';


class App extends Component {
  state={
    loggedinUser:null
  }
  service = new AuthService();

setCurrentUser = (userObj) =>{
  this.setState({
    loggedinUser:userObj
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
