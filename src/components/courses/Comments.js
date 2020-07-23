import React from "react";
import moment from "moment";
import "./CourseDetails.css";

function Comments(props) {
  return (
    <div className="table-responsive-sm">
      <table className="table">
        <thead className="thead-light">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Reviewer</th>
            <th scope="col">Comment</th>
            <th scope="col">Date</th>
          </tr>
        </thead>
        <tbody>
          {props.comments &&
            props.comments.map((comment, index) => {
              return (
                <tr key={comment._id}>
                  <th scope="row">{index + 1}</th>
                  <td>{comment.username}</td>
                  <td>{comment.content}</td>
                  <td>
                    {moment.parseZone(comment.createdAt).local().format("DD MMMM YYYY, HH:mm")}
                  </td>

                </tr>
              );
            })}
        </tbody>
      </table>
    </div>
  );
}

export default Comments;
