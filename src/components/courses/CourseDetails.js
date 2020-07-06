import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class CourseDetails extends Component {
  state = {};

  getSingleCourse = () => {
    const { params } = this.props.match;
    axios
      .get(`http://localhost:5000/api/courses/${params.id}`)
      .then((responseFromAPI) => {
        const course = responseFromAPI.data;
        // 1. Option one
        // this.setState({
        //     title: course.title,
        //     description: course.description
        // })
        // 2. Option two (when the response is equal to the state)
        this.setState(course);
      });
  };
  deleteCourse = () => {
    const { params } = this.props.match;
    axios
      .delete(`http://localhost:5000/api/courses/${params.id}`)
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
    return (
      <div>
        <div>
          <div>
            <h1>{this.state.title}</h1>
            <p>{this.state.description}</p>

            {this.props.loggedInUser && (
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
        {/* <div>
          <AddTask
            getCourse={this.getSingleCourse}
            CourseId={this.state._id}
          />
        </div> */}
        {/* <div>
          {this.state.comments &&
            this.state.comments.map((task) => {
              return <div key={comment._id}>{comment.content}</div>;
            })}
        </div> */}
      </div>
    );
  }
}

export default CourseDetails;
