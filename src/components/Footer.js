import React, { Component } from "react";
import { Navbar, Nav } from "react-bootstrap";
import "./Footer.css";

function Footer(props) {
  return (
      <Navbar bg="light" variant="light" className="footer">
          <img className="footer-brand" src="https://res.cloudinary.com/jmc10/image/upload/v1594918808/myFolder/logo_osljxz.png" alt="logo"/>
          <p className="footer-credits">Developed by Hugo Rodrigues and Julia Carvalho</p>
      </Navbar>
  );
}

export default Footer;
