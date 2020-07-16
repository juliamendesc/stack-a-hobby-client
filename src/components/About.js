import React from "react";
import Card from "react-bootstrap/Card";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
import './About.css';

function About() {
  return (
    <Card className="about-card" >
      <Card.Header><h4>A chance to teach and learn!</h4></Card.Header>
      <Card.Body className="about-card-body" >
        <p>
        Staying inside is the new going out? Fill in your time with enjoyment!
        </p>
        <p>
        <i><b>Stack-a-hobby</b></i> is a platform to gather both people aiming to learn something new for free and those who wish to share their passion and practice their teaching skills.
        </p>
        <p>
        With people spending most of their time at home, the boundaries between private and professional lives were blurred, which increased the visibility of mental health matters, since people became more subject to experience some related issues.
        </p>
        <p>
        Hobbies are an important escape valve to assist people have more pleasure and joy in their lives. With the new normal likely to involve even more the online environment, there is an opportunity for people to develop indoor hobbies and maintain the fun and enjoyment of the private life. Others have also realized their current hobbies may be transformed into a product with the potential to generate an extra income.
        </p>
        <p>
       <i><b>Stack-a-hobby</b></i> intends to ally both people that aim to learn something new for free and those who wish to get more experience and testing the market for a potential new online course on a specific hobby.
       </p>
        <Link to="/courses"><Button variant="info">See our Courses!</Button></Link>
      </Card.Body>
    </Card>
  );
}

export default About;
