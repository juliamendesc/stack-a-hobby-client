import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Card, CardDeck } from "react-bootstrap";
import { Col, Row } from "reactstrap";
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
      <div>
        <div style={{ width: "60%", float: "left" }}>
          <CardDeck className="card-deck">
            <Row>
                <Card className="card-wrapper">
                  {this.state.listOfCourses.map((course) => {
                    return (
                      <div key={course._id}>
                        <Row>
                        <Col xs={7} md={4}>
                        <Card.Img variant="top" src={course.image} />
                        <Card.Body>
                          <Link to={`/courses/${course._id}`}>
                            <Card.Title>{course.title}</Card.Title>
                          </Link>
                          <Card.Text>{course.description}</Card.Text>
                        </Card.Body>
                        <Card.Footer>
                          <small className="text-muted">
                            Category: {course.category}
                          </small>
                        </Card.Footer>
                        </Col>
                        </Row>
                      </div>
                    );
                  })}
                </Card>
            </Row>
          </CardDeck>
        </div>
        <div style={{ width: "40%", float: "right" }}>
          {/* <AddCourse refreshProjects={this.getAllProjects} /> */}
        </div>
      </div>
    );
  }
}

export default CoursesList;
