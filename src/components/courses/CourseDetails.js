import React, { Component } from "react";
import axios from "axios";
import ReactPlayer from "react-player/youtube";
import AddComment from "./AddComment";
import Comments from "./Comments";
import TeacherButtons from "./TeacherButtons";
import AuthService from "../auth/auth-service";
import "./CourseDetails.css";

class CourseDetails extends Component {
  state = {};
  service = new AuthService();

  getSingleCourse = () => {
    const { params } = this.props.match;
    axios
      .get(`https://stack-a-hobby.herokuapp.com/api/courses/${params.id}`)
      .then((responseFromAPI) => {
        const course = responseFromAPI.data;
        this.setState(course);
      });
    console.log("get single course after state", this.course);
  };

  deleteCourse = () => {
    const { params } = this.props.match;
    axios
      .delete(`https://stack-a-hobby.herokuapp.com/api/courses/${params.id}`)
      .then(() => {
        this.props.history.push("/courses");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  componentDidMount() {
    this.service.loggedin().then((response) => {
      this.setState({ loggedInUser: response });
      this.getSingleCourse();
    });
  }

  render() {
    const isAuthor =
      this.state.loggedInUser &&
      this.state.loggedInUser._id === this.state.author;
    // const reviewed = this.state.loggedInUser && this.state.loggedInUser._id === this.state.course.comment.user;
    return (
      <div className="container">
        <div>
          <h1 className="display-5">{this.state.title}</h1>
          <p className="lead lead-text">{this.state.description}</p>
          <p>
            Posted by: <b>{this.state.username}</b>
          </p>
          <hr className="my-4" />
        </div>
        <div className="media row no-gutters">
          <div className="col-12 col-sm-6 col-lg-8 embed-responsive embed-responsive-16by9 align-self-center mr-3">
            {/* <ReactPlayer
              className="embed-responsive-item"
              url={this.state.videoURL}
            /> */}
            <iframe
              className="embed-responsive-item"
              src={`https://www.youtube.com/embed/${this.state.videoURL}`}
              allowFullScreen
            ></iframe>
          </div>
          <div className="media-body col-6 col-sm-4 justify-content-center">
            <AddComment
              {...this.props}
              getSingleCourse={this.getSingleCourse}
              loggedInUser
              params
            />
            <hr className="my-4" />

            {isAuthor && (
              <div className="row no-gutters justify-content-center">
                <div className="col-12 col-sm-6 col-md-8">
                  <h4>Manage your course</h4>
                  <TeacherButtons
                    {...this.props}
                    deleteCourse={this.deleteCourse}
                    params
                    state={this.state}
                    isAuthor
                  />
                </div>
              </div>
            )}
          </div>
        </div>

        <hr className="my-4" />

        <div>
          <Comments comments={this.state.comments} course={this.state.course} />
        </div>
      </div>
    );
  }
}

export default CourseDetails;
