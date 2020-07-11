import React, { Component } from 'react';
import axios from 'axios';

class StudentProfile extends Component {
    state = {
        email:this.props.location.email ,
        dateOfBirth: this.props.location.dateOfBirth,
        firstName: this.props.location.state.firstName,
        lastName: this.props.location.state.lastName,
    }


    componentDidMount() {
        //Make call to the API
        //Set the state with the response
    }

    handleChange = (event) => {
        const {name, value} = event.target;
        this.setState({[name]: value});
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        const { email, dateOfBirth, firstName,lastName } = this.state;
        const { params } = this.props.match;
        axios.put(`https://stack-a-hobby.herokuapp.com/api/courses/${params.id}`, { title, description} )
            .then(() => {
                this.props.history.push('/courses');
            });
    }

    render() {
        return (
            <div>
                <h3>Edit Form</h3>
                <form onSubmit={this.handleFormSubmit}>
                    <label>Title</label>
                    <input type="text" name="title" value={this.state.title} onChange={this.handleChange} />
                    <label>Description</label>
                    <input type="text" name="description" value={this.state.description} onChange={this.handleChange} />
                    <input type="submit" value="submit" />
                 </form>
            </div>
        )
    }
    
}

export default StudentProfile;