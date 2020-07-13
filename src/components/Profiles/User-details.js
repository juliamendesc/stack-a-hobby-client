import React from "react";
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';
import Image from 'react-bootstrap/Image';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col'
import { Link } from "react-router-dom";
// import './About.css';
import AddImage from '../images/AddImage.js';
// import StudentProfile from './User-edit'


function UserDetails(props) {
  return (
      <div>

      {/* <StudentProfile /> */}
      <AddImage />

    <Container>
    <Row>
      <Col xs={6} md={4}>
        <Image src="holder.js/171x180" roundedCircle />
      </Col>
    </Row>
  </Container>
    {/* <Card className="about-card" >
      <Card.Header><h5>A chance to teach and learn!</h5></Card.Header>
      <Card.Body className="about-card-body" >
        <Card.Title>
        Staying inside is the new going out? Fill in your time with enjoyment!
        </Card.Title>
        <Card.Text>
        <i><b>Stack-a-hobby</b></i> is a platform to gather both people aiming to learn something new for free and those who wish to share their passion and practice their teaching skills.
        </Card.Text>
        <Card.Text>
        With people spending most of their time at home, the boundaries between private and professional lives were blurred, which increased the visibility of mental health matters, since people became more subject to experience some related issues.
        </Card.Text>
        <Card.Text>
        Hobbies are an important escape valve to assist people have more pleasure and joy in their lives. With the new normal likely to involve even more the online environment, there is an opportunity for people to develop indoor hobbies and maintain the fun and enjoyment of the private life. Others have also realized their current hobbies may be transformed into a product with the potential to generate an extra income.
        </Card.Text>
        <Card.Text>
       <i><b>Stack-a-hobby</b></i> intends to ally both people that aim to learn something new for free and those who wish to get more experience and testing the market for a potential new online course on a specific hobby.
        </Card.Text>
        <Link to="/courses"><Button variant="info">See our Courses!</Button></Link>
      </Card.Body>
    </Card> */}
    </div>
  );
}

export default UserDetails;
