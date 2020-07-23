import React, { Component } from "react";
import { Link } from "react-router-dom";
import moment from "moment";
import AuthService from "../auth/auth-service";
import axios from "axios";
import Comments from "../courses/Comments";
import "./User-details.css";
import TeacherCourses from "./Teacher-courses";

class UserDetails extends Component {
  state = {
    listOfCourses: [],
    filteredCourses: [],
  };
  service = new AuthService();

  getAllCourses = () => {
    axios
      .get("https://stack-a-hobby.herokuapp.com/api/courses")
      .then((responseFromAPI) => {
        this.setState({
          listOfCourses: responseFromAPI.data,
          filteredCourses: responseFromAPI.data,
        });
      });
  };

  componentDidMount() {
    this.service.loggedin().then((response) => {
      this.setState({ loggedInUser: response });
      this.getAllCourses();
      // this.filterCoursesHandler();
    });
  }

  render() {
    const loggedInUser = this.state.loggedInUser;
    const isTeacher =
      this.state.loggedInUser && this.state.loggedInUser.isTeacher;

    // const commentReviewer = this.props.courses.comments.user;
    return (
      <div className="container">
        <div className="row">
          <div className="col.sm.7 col-md-6">
            <img
              src={loggedInUser && loggedInUser.imageUrl}
              alt="Responsive image"
              className="img-fluid rounded-circle img-thumbnail"
            />
          </div>
          <div className="col.sm.7 col-md-6">
            <table className="table table-responsive table-hover text-left">
              <tbody>
                <tr className="table-light">
                  <th scope="row">Username</th>
                  <td>{loggedInUser && loggedInUser.username}</td>
                </tr>
                <tr className="table-light">
                  <th scope="row">First Name:</th>
                  <td>{loggedInUser && loggedInUser.firstName}</td>
                </tr>
                <tr className="table-light">
                  <th scope="row">Last Name:</th>
                  <td>{loggedInUser && loggedInUser.lastName}</td>
                </tr>
                <tr className="table-light">
                  <th scope="row">Email:</th>
                  <td>{loggedInUser && loggedInUser.email}</td>
                </tr>
                <tr className="table-light">
                  <th scope="row">Date of Birth:</th>
                  <td>
                    {loggedInUser &&
                      moment
                        .parseZone(loggedInUser.dateOfBirth)
                        .local()
                        .format("DD MMMM YYYY")}
                  </td>
                </tr>
              </tbody>
            </table>
            <div className="col.sm.7 col-md-6">
              <Link to="/users-edit/">
                <button type="submit" className="btn btn-outline-secondary">
                  Edit Profile
                </button>
              </Link>
            </div>
          </div>
        </div>
        {isTeacher && (
          <TeacherCourses {...this.props} state={this.state} params />
        )}
      </div>

      // <div>My Courses</div>
      // <div>
      //   My Comments
      //   <div className="table-responsive-sm">
      //     <table className="table">
      //       <thead className="thead-light">
      //         <tr>
      //           <th scope="col">#</th>
      //           <th scope="col">Course</th>
      //           <th scope="col">Comment</th>
      //           <th scope="col">Date</th>
      //         </tr>
      //       </thead>
      //       {/* <tbody>
      //         {this.state.filtered.map((course, index) => {
      //               const comment = this.props.filtered.comment;
      //           return (
      //             // <tr key={comment._id}>
      //             //   <th scope="row">{index + 1}</th>
      //             //   <td>{course.title}</td>
      //             //   <td>{comment.content}</td>
      //             //   <td>
      //             //     {moment.parseZone(comment.createdAt).local().format("DD MMMM YYYY, HH:mm")}
      //             //   </td>
      //             // </tr>
      //           );
      //         })}
      //       </tbody> */}
      //     </table>
      //   </div>
      // {/* </div> */}
      // <div>My Ratings</div>
      // </div>
    );
  }
}
// }

export default UserDetails;
