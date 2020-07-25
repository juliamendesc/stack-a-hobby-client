import React, { Component } from "react";
import axios from "axios";

class AddCourse extends Component {
  state = {
    title: "",
    description: "",
    videoURL: "",
    category: "",
    imageURL: "",
    author: "",
    username: "",
  };

  handleChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  handleFormSubmit = (event) => {
    event.preventDefault();
    const { title, description, videoURL, category, imageURL } = this.state;
    const { author, username } = this.props.loggedInUser;
    axios
      .post(
        `https://stack-a-hobby.herokuapp.com/api/courses`,
        {
          title,
          description,
          videoURL,
          category,
          imageURL,
          author,
          username,
        },
        { withCredentials: true }
      )
      .then(() => {
        this.props.history.push("/courses");
      });
  };

  render() {
    return (
      <div className="container">
        <h3 className="display-5">Add Your Course</h3>
        <form onSubmit={this.handleFormSubmit}>
          <div className="form-group col-12 col-md-6 offset-md-3">
            <label>Course Title</label>
            <input
              type="text"
              className="form-control"
              id="courseTitle"
              name="title"
              placeholder="Your course title"
              value={this.state.title}
              onChange={this.handleChange}
              required
            />
          </div>
          <div className="form-group col-12 col-md-6 offset-md-3">
            <label>Description</label>
            <textarea
              type="text"
              className="form-control"
              id="courseDescription"
              name="description"
              placeholder="Describe your course"
              value={this.state.description}
              onChange={this.handleChange}
              required
            />
          </div>
            <div className="form-group col-12 col-md-6 offset-md-3">
              <label>Video ID</label>
              <input
                type="text"
                className="form-control"
                id="courseVideoURL"
                name="videoURL"
                placeholder="Your youtube video identification number"
                value={`https://www.youtube.com/embed/${this.state.videoURL}`}
                onChange={this.handleChange}
              />
            </div>
            <div className="form-group col-12 col-md-6 offset-md-3">
              <label>Thumbnail</label>
              <input
                type="text"
                className="form-control"
                id="courseDescription"
                name="imageURL"
                placeholder="Link to your course thumbnail"
                value={this.state.imageURL}
                onChange={this.handleChange}
                required
              />
            </div>
            <div className="form-group col-12 col-md-6 offset-md-3">
              <label>Category</label>
              <select
                className="custom-select"
                id="courseCategory"
                name="category"
                value={this.state.category}
                onChange={this.handleChange}
                required
              >
                <option value="">
                  Choose one
                </option>
                <option>Arts & Crafts</option>
                <option>DIY</option>
                <option>Foods & Drinks</option>
                <option>Education</option>
                <option>Music & Video</option>
                <option>Sports</option>
                <option>Other</option>
              </select>
            </div>
            <button type="submit" className="btn btn-outline-info" value="submit">Submit</button>
          </form>
      </div>
    );
  }
}
export default AddCourse;
