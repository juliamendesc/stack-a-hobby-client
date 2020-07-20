import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Jumbotron, Card, CardImg, CardText, CardBody, CardTitle, CardFooter, Row, Col} from 'reactstrap';
import Search from '../Search';
import "./CoursesLists.css";
import 'bootstrap/dist/css/bootstrap.css';

class CoursesList extends Component {
  state = {
    listOfCourses: [],
    filtered:[],
  };

  getAllCourses = () => {
    axios
      .get("https://stack-a-hobby.herokuapp.com/api/courses")
      .then((responseFromAPI) => {
        this.setState({
          listOfCourses: responseFromAPI.data,
          filtered: responseFromAPI.data
        })
      });
  };
  componentDidMount() {
    this.getAllCourses();
  }

  filterCoursesHandler = (input) => {
    const filtered = this.state.listOfCourses.filter(el => {
      return el.title.toLowerCase().includes(input.toLowerCase());
    });
    this.setState({ filtered: filtered});  
  }

  render() {
    const isTeacher = this.props.loggedInUser && this.props.loggedInUser.isTeacher;
    return (
      <div>
      <Jumbotron responsive="lg" fluid className="courses-jumbotron">
      <Search filterCourses={this.filterCoursesHandler}/>
      <div className="add-course">
        {isTeacher && (
          <Link
            to={{
              pathname: `/courses/add-course`,
            }}
          >
            Add Your Course
          </Link>
           )}
        </div>
      <Row xs="1" sm="2" md="4">
           {this.state.filtered.map((course) => {
            const courseImage = course.imageURL;
            return (
              <Col sm={{ size: 3}}>
              <Card key={course._id}>
                <CardImg 
                top width="100%" src={courseImage}/>
                <CardBody>
                  <Link to={`/courses/${course._id}`}>
                    <CardTitle>
                      {course.title}
                    </CardTitle>
                  </Link>
                  <CardText>
                    {course.description}
                  </CardText>
                </CardBody>
                <CardFooter>
                  <small className="text-muted">
                    <b>Category:</b> {course.category}
                  </small>
                </CardFooter>
              </Card>
              </Col>
            );
          })}
        </Row>
        {/* // <div style={{ width: "40%", float: "right" }}> */}
        {/* <AddCourse refreshProjects={this.getAllProjects} /> */}
        {/* </div> */}
      </Jumbotron>
      </div>
    );
  }
}

export default CoursesList;
