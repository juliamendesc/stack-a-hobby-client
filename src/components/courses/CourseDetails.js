import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ReactPlayer from "react-player/youtube";
import AddComment from "./AddComment";
import { Table } from "reactstrap";
import moment from "moment";
import "./CourseDetails.css";

class CourseDetails extends Component {
  state = {};

  getSingleCourse = () => {
    const { params } = this.props.match;
    axios
      .get(`https://stack-a-hobby.herokuapp.com/api/courses/${params.id}`)
      .then((responseFromAPI) => {
        const course = responseFromAPI.data;
        this.setState(course);
      });
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
    this.getSingleCourse();
  }

  render() {
    const { params } = this.props.match;
    const loggedInUser = this.props.loggedInUser._id;
    return (
      <div>
        <div>
          <div>
            <h1>{this.state.title}</h1>
            <div>
              {this.state.description}
              <ReactPlayer className="course-video" url={this.state.videoURL} />
            </div>
            {loggedInUser && (
              <div>
                <button onClick={() => this.deleteCourse()}>
                  Delete course
                </button>
              </div>
            )}
          </div>
        </div>

        <div>
          <Link
            to={{
              pathname: `/courses/${params.id}/edit`,
              state: {
                title: this.state.title,
                description: this.state.description,
              },
            }}
          >
            Edit Course
          </Link>
        </div>
        <hr />
        <div>
          <Table responsive>
            <thead>
              <tr>
                <th>#</th>
                <th>Reviewer</th>
                <th>Comment</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {this.state.comments &&
                this.state.comments.map((comment) => {
                  return (
                    <tr key={comment._id}>
                      <th scope="row">1</th>
                      <td>{comment.username}</td>
                      <td>{comment.content}</td>
                      <td>
                        {moment.unix(comment.createdAt, [
                          "YYYY-MM-DD",
                          "DD-MM-YYYY",
                        ]).format("MM/DD/YYYY, HH:mm")}
                        {/* {moment(comment.createdAt, [
                          "YYYY-MM-DD",
                          "DD-MM-YYYY",
                        ]).format("DD MMMM YYYY, HH:mm zz")} */}
                      </td>
                    </tr>
                  );
                })}
            </tbody>
          </Table>
        </div>
        <hr />
        {this.props.loggedInUser && (
          <div>
            <AddComment {...this.props} loggedInUser params />
          </div>
        )}
      </div>
    );
  }
}

export default CourseDetails;
