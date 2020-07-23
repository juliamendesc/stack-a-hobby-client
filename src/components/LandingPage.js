import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";

function LandingPage2(props) {
  return (
    <div>
      <div className="jumbotron jumbotron-1">
        <div className="container">
          <div className="row">
            <div className="col-sm-5 jumbotron-text">
              <h1 className="display-3">Explore your interests</h1>
              <p className="lead">
                Stack-a-hobby helps you learn new activities by connecting you
                to people who want to share their passion
              </p>
              <hr className="my-4" />
              <p>
                <Link to="/courses">
                  <button type="button" className="btn btn-light btn-lg">
                    See Courses
                  </button>
                </Link>
                <Link to="/signup">
                  <button type="button" className="btn btn-dark btn-lg">
                    Sign up
                  </button>
                </Link>
              </p>
            </div>
            <div className="col-sm-7">
              <img
                src="https://res.cloudinary.com/jmc10/image/upload/v1594907725/myFolder/ezgif.com-optimize_wm6vqe.gif"
                className="rounded float-right img-fluid"
                alt="idea-gif"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <h1 className="display-5">A chance to teach and learn</h1>
        <div className="col-md align-items-center align-self-center w-300">
          <p className="lead text-center">
            Stack-a-hobby is a platform to gather both people aiming to learn
            something new for free and those who wish to share their passion and
            practice their teaching skills.
          </p>
          <hr className="my-5" />
        </div>
      </div>

      <div className="jumbotron jumbotron-2">
        <div className="container">
          <h1 className="display-3">A diverse range of hobbies</h1>
          <p className="lead lead-text">
            {/* Se tirar o lead, é possível adaptar o CSS */}
            Our courses are organized in broad areas, which allow you to look
            into a specific interest.
          </p>
          <hr className="my-4" />
        </div>
        <div className="card-deck">
          <div className="card">
            <img
              className="card-img-top"
              src="https://images.unsplash.com/photo-1527402858-36f052d83df4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60"
              alt="Card image cap-1"
            />
            <div className="card-body">
              <h5 className="card-title">Arts & Crafts</h5>
              <p className="card-text">
                <Link to="/courses">See More</Link>
              </p>
            </div>
          </div>
          <div className="card">
            <img
              className="card-img-top"
              src="https://images.unsplash.com/photo-1455619452474-d2be8b1e70cd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60"
              alt="Card image cap-2"
            />
            <div className="card-body">
              <h5 className="card-title">Foods & Drinks</h5>
              <p className="card-text">
                <Link to="/courses">See More</Link>
              </p>
            </div>
          </div>
          <div className="card">
            <img
              className="card-img-top"
              src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60"
              alt="Card image cap-3"
            />
            <div className="card-body">
              <h5 className="card-title">Education</h5>
              <p className="card-text">
                <Link to="/courses">See More</Link>
              </p>
            </div>
          </div>
          <div className="card">
            <img
              className="card-img-top"
              src="https://images.unsplash.com/photo-1511379938547-c1f69419868d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60"
              alt="Card image cap-4"
            />
            <div className="card-body">
              <h5 className="card-title">Music & Video</h5>
              <p className="card-text">
                <Link to="/courses">See More</Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <h1 className="display-5">Staying inside is the new going out? </h1>
        <h1 className="display-5">Fill in your time with enjoyment!</h1>
      </div>

      <div className="jumbotron jumbotron-2">
        <div className="container">
          <h1 className="display-3">
            Share your passion and practice your teaching skills
          </h1>
          <p className="lead lead-text">
            {/* Se tirar o lead, é possível adaptar o CSS */}
            Stack-a-hobby allows you to start your teaching career, share your
            content and get feedback from your students.
          </p>
          <hr className="my-4" />
        </div>
        <div className="card-deck">
          <div className="card">
            <img
              className="card-img-top specific-image"
              src="https://images.unsplash.com/photo-1497015289639-54688650d173?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60"
              alt="Card image cap-5"
            />
            <div className="card-body">
              <h5 className="card-title">Share your course</h5>
            </div>
          </div>
          <div className="card">
            <img
              className="card-img-top"
              src="https://images.unsplash.com/photo-1520333789090-1afc82db536a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=600&q=60"
              alt="Card image cap-6"
            />
            <div className="card-body">
              <h5 className="card-title">Interact with students</h5>
            </div>
          </div>
          <div className="card">
            <img
              className="card-img-top"
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60"
              alt="Card image cap-7"
            />
            <div className="card-body">
              <h5 className="card-title">Exchange feedback</h5>
            </div>
          </div>
        </div>
      </div>

      <div className="jumbotron">
        <div className="container">
          <div className="row align-middle">
            <div className="col-sm-8 text-left">
              <h1 className="display-4">Ready to get started?</h1>
              <p className="lead">Sign up or contact us</p>
            </div>
            <div className="col-sm-3 align-self-center">
              <Link to="/signup">
                <button type="button" className="btn btn-dark btn-lg">
                  Sign up
                </button>
              </Link>
              <a href="mailto:contact@stackahobby.com">
                <button type="button" className="btn btn-light btn-lg">
                  Contact us
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage2;
