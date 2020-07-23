import React from "react";

function FooterPage(props) {
  return (
    <nav className="navbar navbar-light bg-light sticky-bottom">
      <span className="navbar-text">
        &copy; {new Date().getFullYear()} Copyright: Developed by Hugo Rodrigues
        and Julia Carvalho
      </span>
      <a className="navbar-brand" href="/">
        <img
          className="img-fluid"
          src="https://res.cloudinary.com/jmc10/image/upload/v1594927766/myFolder/logo_roboto_mjlb8q.png"
          alt="Responsive image"
        />
      </a>
    </nav>
  );
}

export default FooterPage;
