import React from "react";
import { Button, Image, Container } from "react-bootstrap";
import { Col, Row} from 'reactstrap';
import { Link } from "react-router-dom";
import moment from 'moment';
import './User-details.css';

function UserDetails(props) {
    const loggedInUser = props.loggedInUser;
    // const userDateOfBirth = moment(loggedInUser.dateOfBirth);
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
          </div>
          <div>
            My Ratings
          </div>
        </Container>
      </div>
    );
}

export default UserDetails;
