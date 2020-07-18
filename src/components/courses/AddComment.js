import React, { Component } from "react";
import axios from "axios";
import { Form, Label, Input, Container } from 'reactstrap';

class AddComment extends Component {
    state= {
        content: ""
    };

    handleChange = (event) => {  
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const { params } = this.props.match;
        const { content } = this.state;
        axios.post(`https://stack-a-hobby.herokuapp.com/api/courses/${params.id}/comments`, { content }, { withCredentials: true })
            .then((response) => {
                console.log('comment created', response);
                this.setState({ content: ''});
            })
    }  

    render() {
    return (
        <Container>
        <h3>Comment this course</h3>
        <Form onSubmit={this.handleSubmit}>
          <Label>Your Comment</Label>
          <Input
            type="text"
            name="content"
            value={this.state.content}
            onChange={this.handleChange}
            required
          />
          <Input type="submit" value="submit" />
        </Form>
      </Container>
    )   
    }
}

export default AddComment;