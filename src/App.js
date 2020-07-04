import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from './components/projects/auth/Login';
import Signup from './components/projects/auth/Signup';
import AuthService from './components/projects/auth/auth-service';



class App extends Component {
  state={
    loggedinUser:null
  }
  service = new AuthService();

setCurrtentUser = (userObj) =>{
  this.setState({
    loggedinUser:userObj
  })
}
  render(){
  return (
    <div className="App">
         <Switch>
          <Route path='/login' render={(props) => <Login setCurrentUser={this.setCurrentUser} {...props} /> } />
          <Route path='/signup' render={(props) => <Signup setCurrentUser={this.setCurrentUser} {...props} /> } />
        </Switch>
    </div>
  );
}
}

export default App;
