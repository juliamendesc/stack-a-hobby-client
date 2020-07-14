import React, { Component } from "react";
import { Col, Row, Button, Form, FormGroup, Label, Input, } from 'reactstrap';
 
// import the service file since we need it to send (and get) the data to(from) server
import axios from 'axios';
 
class AddImage extends Component {
    state = {};
    
    handleChange = (event) => {  
        const { name, value } = event.target;
        this.setState({ [name]: value });
    }
    
    handleFileChange = (event) => {
        this.setState({ file: event.target.files[0]});
    }

    handleSubmit = (event) => {
        event.preventDefault();
        const uploadData = new FormData();
        uploadData.append("imageUrl", this.state.file);
        axios.post('https://stack-a-hobby.herokuapp.com/api/upload', uploadData)
            .then((response) => {
                console.log('image uploaded', response);
                
                axios.post('https://stack-a-hobby.herokuapp.com/api/images/create', {
                    name: this.state.name,
                    description: this.state.description,
                    imageUrl: response.data.imageUrl
                })
                .then((response) => {
                    console.log('image created', response);
                    this.setState({ name: '', description: '', file: '', feedbackMessage: 'Image uploaded sucessfully'});
                })
            })
    }  
    
    render() {
        return (
          <div>
            <h4>Upload New Image</h4>
            <Form onSubmit={this.handleSubmit}>
            <Row form>
            <Col sm="12" md={{ size: 6, offset: 3 }}>
              <FormGroup>
              <Label>Profile Image</Label>
                <Col sm="12" md={{ size: 6, offset: 3 }}>
                  <Input type="file" onChange={this.handleFileChange}  /> 
                </Col>
              </FormGroup>
            </Col>
          </Row>
            </Form>
            <div>{this.state.feedbackMessage}</div>
          </div>
        );
    }
}
 
export default AddImage;