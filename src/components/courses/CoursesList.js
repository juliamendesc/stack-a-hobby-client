import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import Search from "../Search";
import "./CoursesLists.css";

class CoursesList extends Component {
  state = {
    listOfCourses: [],
    filtered: [],
  };

  getAllCourses = () => {
    axios
      .get("https://stack-a-hobby.herokuapp.com/api/courses")
      .then((responseFromAPI) => {
        this.setState({
          listOfCourses: responseFromAPI.data,
          filtered: responseFromAPI.data,
        });
      });
  };
  componentDidMount() {
    this.getAllCourses();
  }

  filterCoursesHandler = (input) => {
    const filtered = this.state.listOfCourses.filter((el) => {
      return el.title.toLowerCase().includes(input.toLowerCase());
    });
    this.setState({ filtered: filtered });
  };

  render() {
    return (
      <div>
        <Search
          filterCourses={this.filterCoursesHandler}
          loggedInUser={this.props.loggedInUser}
        />
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="card-deck col">
            <div className="row no-gutters">
              {this.state.filtered.map((course) => {
                const courseImage = course.imageURL;
                return (
                  <div className="container col-sm-4" key={course._id}>
                    <div className="card bg-light">
                      <img
                        className="card-img-top"
                        src={courseImage}
                        alt="Card course image cap-1"
                      />
                      <div className="card-body">
                        <Link to={`/courses/${course._id}`}>
                          <h5 className="card-title">{course.title}</h5>
                        </Link>
                        <p className="card-text text-left">{course.description}</p>
                      </div>
                      <div className="card-footer">
                        <small className="text-muted">
                          <b>Category:</b> {course.category}
                        </small>
                      </div>
                    </div>
                  </div>
                );
              })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default CoursesList;
