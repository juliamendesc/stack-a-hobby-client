import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ReactPlayer from 'react-player/youtube';

class CoursesList extends Component {
  state = {
    listOfCourses: [],
  };

  getAllCourses = () => {
    axios.get("https://stack-a-hobby.herokuapp.com/api/courses").then((responseFromAPI) => {
      this.setState({
        listOfCourses: responseFromAPI.data,
      });
    });
  };
  componentDidMount() {
    this.getAllCourses();
  }

  render() {
    return (
      <div>
        <div style={{ width: "60%", float: "left" }}>
          {this.state.listOfCourses.map((course) => {
            return (
              <div key={course._id}>

                <Link to={`/courses/${course._id}`}>
                  <h3>{course.title}</h3>
                </Link>
              </div>
            );
          })}
        </div>
        <div style={{ width: "40%", float: "right" }}>
          {/* <AddCourse refreshProjects={this.getAllProjects} /> */}
        </div>
      </div>
    );
  }
}

export default CoursesList;
