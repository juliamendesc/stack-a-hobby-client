import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ReactPlayer from 'react-player/youtube';
// import ResponsivePlayer from './ResponsivePlayer';
import './CourseDetails.css';


class CourseDetails extends Component {
  state = {};

  getSingleCourse = () => {
    const { params } = this.props.match;
    axios
      .get(`https://stack-a-hobby.herokuapp.com/api/courses/${params.id}`)
      .then((responseFromAPI) => {
        const course = responseFromAPI.data
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
    return (
      <div>
        <div>
          <div>
            <h1>{this.state.title}</h1>
            <p>{this.state.description}
            <ReactPlayer className="course-video" url={this.state.videoURL}/></p>
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