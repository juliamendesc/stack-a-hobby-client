import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./courses/CoursesLists.css";

class Search extends Component {
    state = {
        input: "",
    }

    handleSearch = (event) => {
        // Pass the input value to the CoursesList.js component, so that
        // we can filter the courses array
        this.props.filterCourses(event.target.value);
        this.setState({input: event.target.value})
    }

    render() {
        const isTeacher = this.props.loggedInUser && this.props.loggedInUser.isTeacher;
        return (
            <nav className="navbar navbar-light bg-light search-bar">
            <form className="form-inline">
            <input
              type="search"
              className="form-control mr-sm-2"
              onChange={this.handleSearch}
              placeholder="Search by title"
              aria-label="Search"
              value={this.state.input}
            />
            </form>
        {isTeacher && (
          <Link
            to={{
              pathname: `/courses/add-course`,
            }}
          >
            <button type="button" 
            className="btn btn-outline-success">
            Add Your Course
            </button>
          </Link>
           )}
            </nav>
        );
      }
}

export default Search;