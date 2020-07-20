import React, { Component } from "react";
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
        return (
          <div className="search-bar">
            <input
              type="text"
              className="input mr-sm-2"
              onChange={this.handleSearch}
              placeholder="Search by title"
              value={this.state.input}
            />
          </div>
        );
      }
}

export default Search;