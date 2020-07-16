import React from "react";
import { Link } from "react-router-dom";
import { Jumbotron, Button, Image, Container, Card, CardGroup, CardDeck } from "react-bootstrap";
import "./LandingPage.css";

function LandingPage(props) {
  return (
    <div>
        <Jumbotron responsive="lg" className="landing-jumbotron">
            <div className="jumbotron-text">
            <h1 className="jumbotron-h1">Explore your interests</h1>
            <p className="jumbotron-p">
                Stack-a-hobby helps you learn new activities by connecting you to
                people who want to share their passion
            </p>
            <p>
                <Link className="jumbotron-button-link" to="/courses">
                <Button className="jumbotron-button" variant="dark" size="lg">
                    See Courses
                </Button>
                </Link>
                <Link className="jumbotron-button-link" to="/signup">
                <Button className="jumbotron-button" variant="dark" size="lg">
                    Sign up
                </Button>
                </Link>
            </p>
            </div>
            <div className="landing-image">
            <Image
                src="https://res.cloudinary.com/jmc10/image/upload/v1594907725/myFolder/ezgif.com-optimize_wm6vqe.gif"
                fluid
            />
            </div>
        </Jumbotron>
        <div>
            <Container>
            <h1 className="second-h1">A chance to teach and learn</h1>
            <p className="second-p">
                Stack-a-hobby is a platform to gather both people aiming to learn
                something new for free and those who wish to share their passion and
                practice their teaching skills.
            </p>
            <div>
            <img className="squares" src="https://img.icons8.com/ios-filled/50/000000/rectangle.png"/>
            <img className="squares" src="https://img.icons8.com/ios-filled/50/000000/rectangle.png"/>
            <img className="squares" src="https://img.icons8.com/ios-filled/50/000000/rectangle.png"/>
            <img className="squares" src="https://img.icons8.com/ios-filled/50/000000/rectangle.png"/>
            <img className="squares" src="https://img.icons8.com/ios-filled/50/000000/rectangle.png"/>
            </div>
            </Container>
        </div>
        <Jumbotron fluid>
            <Container>
                <h1>A diverse range of hobbies</h1>
                <p className="third-p">
                Our courses are organized in broad areas, which allow you to look into a specific interest.
                </p>
            </Container>
            <CardGroup className="cardgroup-1">
                <Card>
                    <Card.Img className="card-image" variant="top" 
                    src="https://images.unsplash.com/photo-1527402858-36f052d83df4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60" 
                    />
                    <Card.Body>
                    <Card.Title>Arts & Crafts</Card.Title>
                    <Card.Text className="card-text">
                        <Link className="jumbotron-button-link" to="/courses">See More</Link>
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img className="card-image" variant="top" 
                    src="https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60" 
                    />
                    <Card.Body>
                    <Card.Title>Foods & Drinks</Card.Title>
                    <Card.Text className="card-text">
                        <Link className="jumbotron-button-link" to="/courses">See More</Link>
                    </Card.Text>
                    </Card.Body>
                 </Card>
                <Card>
                    <Card.Img className="card-image" variant="top" src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60" />
                    <Card.Body>
                    <Card.Title>Education</Card.Title>
                    <Card.Text className="card-text">
                        <Link className="jumbotron-button-link" to="/courses">See More</Link>
                    </Card.Text>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img className="card-image" variant="top" src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60" />
                    <Card.Body>
                    <Card.Title>Music & Video</Card.Title>
                    <Card.Text className="card-text">
                        <Link className="jumbotron-button-link" to="/courses">See More</Link>
                    </Card.Text>
                    </Card.Body>
                </Card>
            </CardGroup>
        </Jumbotron>
        <div>
            <Container>
            <h4>Staying inside is the new going out? Fill in your time with enjoyment!</h4>
            <br />
            <img className="circle" src="https://img.icons8.com/ios-filled/50/000000/filled-circle.png"/>
            </Container>
        </div>
        <Jumbotron fluid>
            <Container>
                <h1 className="second-h1">Share your passion and practice your teaching skills</h1>
                <p className="third-p">
                Stack-a-hobby allows you to start your teaching career, share your content and get feedback from your students.
                </p>
            </Container>
            <div className="cardDeck-2">
            <CardDeck style={{ width: '75rem' }}>
                <Card>
                    <Card.Img className="card-deck-image" variant="top" 
                    src="https://images.unsplash.com/photo-1497015289639-54688650d173?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60" 
                    />
                    <Card.Body>
                    <Card.Title>Share your course</Card.Title>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img className="card-deck-image" variant="top" 
                    src="https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60" 
                    />
                    <Card.Body>
                    <Card.Title>Interact with students</Card.Title>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Img className="card-deck-image" variant="top" 
                    src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60" 
                    />
                    <Card.Body>
                    <Card.Title>Exchange feedback</Card.Title>
                    </Card.Body>
                </Card>
            </CardDeck>
            </div>
        </Jumbotron>
        <Container className="lower-container">
            <div className="jumbotron-lower-text">
                <h3 className="lower-h3">Ready to get started?</h3>
                <p className="lower-p">
                    Sign up or contact us
                </p>
            </div>
            <div className="landing-buttons-footer">
                    <Link className="jumbotron-button-link" to="/signup">
                    <Button className="jumbotron-button" variant="dark" size="lg">
                        Sign up
                    </Button>
                    </Link>
                    <a href="mailto:contact@stackahobby.com" className="jumbotron-button-link">
                    <Button className="jumbotron-button" variant="light" size="lg">
                        Contact us
                    </Button>
                    </a>
                </div>
        </Container>
    </div>
  );
}

export default LandingPage;
