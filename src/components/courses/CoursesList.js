import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Card, CardDeck } from "react-bootstrap";
import "./CoursesLists.css";
// import ReactPlayer from "react-player/youtube";

class CoursesList extends Component {
  state = {
    listOfCourses: [],
  };

  getAllCourses = () => {
    axios
      .get("https://stack-a-hobby.herokuapp.com/api/courses")
      .then((responseFromAPI) => {
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
      <div className="card-deck">
        {/* <div style={{ width: "60%", float: "left" }}> */}
        <CardDeck>
          {this.state.listOfCourses.map((course) => {
            return (
              <Card className="card-wrapper" key={course._id}>
                <Card.Img variant="top" src={course.imageURL} />
                <Card.Body>
                  <Link to={`/courses/${course._id}`}>
                    <Card.Subtitle className="card-title">
                      {course.title}
                    </Card.Subtitle>
                  </Link>
                  <br/>
                  <Card.Text className="card-text">
                    {course.description}
                  </Card.Text>
                </Card.Body>
                <Card.Footer>
                  <small className="text-muted">
                    <b>Category:</b> {course.category}
                  </small>
                </Card.Footer>
              </Card>
            );
          })}
        </CardDeck>
        {/* </div> */}
        {/* // <div style={{ width: "40%", float: "right" }}> */}
        {/* <AddCourse refreshProjects={this.getAllProjects} /> */}
        {/* </div> */}
        <br />
      </div>
    );
  }
}

export default CoursesList;
