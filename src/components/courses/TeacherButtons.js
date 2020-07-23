import React from "react";
import { Link } from "react-router-dom";

function TeacherButtons(props) {
  const { params } = props.match;
  return (
    <div>
      <Link
        to={{
          pathname: `/courses/${params.id}/edit`,
          state: {
            title: props.state.title,
            description: props.state.description,
          },
        }}
      >
        <button type="button" className="btn btn-outline-success">
          Edit Course
        </button>
      </Link>
      <button type="button" className="btn btn-danger" onClick={() => props.deleteCourse()}>Delete</button>
    </div>
  );
}

export default TeacherButtons;
