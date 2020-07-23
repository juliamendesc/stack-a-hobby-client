import React from "react";
import moment from "moment";
import { Link } from "react-router-dom";
// import "./CourseDetails.css";

function TeacherCourses(props) {
  return (
    <div className="table-responsive-sm">
      <p className="lead lead-text text-left"><b>My Teaching Path</b></p>
      <table className="table">
        <thead className="thead-light">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Course Title</th>
            <th scope="col">Category</th>
            <th scope="col">Date posted</th>
            <th scope="col">Edit your course</th>
          </tr>
        </thead>
        <tbody>
        {props.state.filteredCourses.map((course, index) => {
            const isAuthor = props.isAuthor;
            return (
                <tr key={course._id}>
                  <th scope="row">{index + 1}</th>
                  <td className="text-left">{course.title}</td>
                  <td>{course.category}</td>
                  <td>
                    {moment.parseZone(course.createdAt).local().format("DD MMMM YYYY")}
                  </td>
                  <Link to={`/courses/${course._id}`}><td>Manage this course</td></Link>
                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}

export default TeacherCourses;
