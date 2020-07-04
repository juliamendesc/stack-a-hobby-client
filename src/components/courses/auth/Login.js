import React, {Component} from 'react';
import AuthService from './auth-service';
import {Link} from 'react-router-dom';
import { render } from '@testing-library/react';

class Login extends Component {
    state ={
        username:'',
        password:''
    }
    service = new AuthService();

    handleChange =(event) =>{
        const{name, value} =event.target;
        this.setState({[name]:value});
    }

    handleFormSubmit =(event) =>{
        event.preventDefault();
        const{username, password} = this.state;
        this.service.login(username,password)
        .then(response =>{
            this.props.setCurrentUser(response);
            this.setState({username:'', password:''});
            this.props.history.push('/courses');
        })
    }


render() {
    return(
        <div>
            <form onSubmit={this.handleFormSubmit}>
                    <label>Username:</label>
                    <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
                    <label>Password:</label>
                    <input name="password" value={this.state.password} onChange={this.handleChange} />
                    <input type="submit" value="Login" />
                </form>
                <p>Don't have account? 
                    <Link to={"/signup"}> Signup</Link>
                </p>
        </div>
    )
}
}

export default Login