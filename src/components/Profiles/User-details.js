import React, {Component} from "react";
import { Button, Image, Container } from "react-bootstrap";
import { Col, Row, Table} from 'reactstrap';
import { Link } from "react-router-dom";
import moment from 'moment';
import './User-details.css';

class UserDetails extends Component {
  render() {
    const loggedInUser = this.props.loggedInUser;
    return (
      <div>
        <Container className="container">
          <div>
          <Row>
            <Col xs={7} md={5}>
              <Image className="avatar" src={loggedInUser && loggedInUser.imageUrl} roundedCircle />
              </Col>
              <Col xs={7} md={5}>
              <Row>
              <h5>Username: </h5> {loggedInUser && loggedInUser.username}
              </Row>
              <Row>
              <h5>First Name: </h5> {loggedInUser && loggedInUser.firstName}
              </Row>
              <Row>
              <h5>Last Name: </h5> {loggedInUser && loggedInUser.lastName}
              </Row>
              <Row>
              <h5>Email: </h5> {loggedInUser && loggedInUser.email}
              </Row>
              <Row>
              <h5>Date of Birth: </h5> {loggedInUser && moment(loggedInUser.dateOfBirth, ["YYYY-MM-DD", "DD-MM-YYYY"]).format("DD MMMM YYYY")}
              </Row>
              <Link to="/users-edit/"><Button color="primary" type="submit">Edit Profile</Button></Link>
            </Col>
          </Row>
          </div>
          <div>
            My Courses
          </div>
          <div>
            My Comments
            <div>
          <Table responsive>
            <thead>
              <tr>
                <th>#</th>
                <th>Course</th>
                <th>Comment</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {/* {{loggedInUser && 
              loggedInUser.comments.map((comment) => {
                  return (
                    <tr key={comment._id}>
                      <th scope="row">1</th>
                      <td>{comment.course}</td>
                      <td>{comment.content}</td>
                      <td>
                        {moment(comment.createdAt, [
                          "YYYY-MM-DD",
                          "DD-MM-YYYY",
                        ]).format("DD MMMM YYYY")}
                      </td>
                    </tr>
                  );
                })} */}
            </tbody>
          </Table>
        </div>
          </div>
          <div>
            My Ratings
          </div>
        </Container>
      </div>
    );
  }
}

export default UserDetails;
