import React, { Component } from "react";
import axios from "axios";

class AddComment extends Component {
  state = {
    content: "",
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { params } = this.props.match;
    const { content } = this.state;
    axios
      .post(
        `https://stack-a-hobby.herokuapp.com/api/courses/${params.id}/comments`,
        { content },
        { withCredentials: true }
      )
      .then(() => {
        this.props.getSingleCourse();
        this.setState({ content: "" });
      });
  };

  render() {
    return (
      <div className="container">
      <h4>Comment this course</h4>
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <textarea
              type="text"
              name="content"
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              value={this.state.content}
              onChange={this.handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="btn btn-light">Submit Comment</button>
        </form>
        </div>
    );
  }
}

export default AddComment;
