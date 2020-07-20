import React, { Component } from "react";
import axios from "axios";
import { Col, Row, Form, FormGroup, Label, Input } from "reactstrap";

class EditCourse extends Component {
  state = {
    title: this.props.location.state.title,
    description: this.props.location.state.description,
    videoURL: this.props.location.state.videoURL,
    category: this.props.location.state.category,
    imageURL: this.props.location.state.imageURL,
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { title, description, videoURL, category, imageURL } = this.state;
    const { params } = this.props.match;
    axios
      .put(`https://stack-a-hobby.herokuapp.com/api/courses/${params.id}`, {
        title,
        description,
        videoURL,
        category,
        imageURL
      })
      .then(() => {
        this.props.history.push("/courses");
      });
  };

  render() {
    return (
      <div>
        <h3>Edit Form</h3>
        <Form onSubmit={this.handleFormSubmit}>
          <Row form>
            <Col sm="12" md={{ size: 6, offset: 3 }}>
              <FormGroup>
                <Label>Title</Label>
                <Input
                  type="text"
                  name="title"
                  value={this.state.title}
                  onChange={this.handleChange}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row form>
            <Col sm="12" md={{ size: 6, offset: 3 }}>
              <FormGroup>
                <Label>Description</Label>
                <Input
                  type="text"
                  name="description"
                  value={this.state.description}
                  onChange={this.handleChange}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row form>
            <Col sm="12" md={{ size: 6, offset: 3 }}>
              <FormGroup>
                <Label>Video URL</Label>
                <Input
                  type="text"
                  name="videoURL"
                  value={this.state.videoURL}
                  onChange={this.handleChange}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row form>
            <Col sm="12" md={{ size: 6, offset: 3 }}>
              <FormGroup>
                <Label>Image URL</Label>
                <Input
                  type="text"
                  name="imageURL"
                  value={this.state.imageURL}
                  onChange={this.handleChange}
                />
              </FormGroup>
            </Col>
          </Row>
          <Row form>
            <Col sm="12" md={{ size: 6, offset: 3 }}>
              <FormGroup>
                <Label>Category</Label>
                <Input
                  type="text"
                  name="category"
                  value={this.state.category}
                  onChange={this.handleChange}
                />
              </FormGroup>
            </Col>
          </Row>
          <input type="submit" value="submit" />
        </Form>
      </div>
    );
  }
}
export default EditCourse;
