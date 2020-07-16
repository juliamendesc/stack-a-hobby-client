import React from "react";
import { Navbar, Nav } from "react-bootstrap";

function FooterPage(props) {
  return (
    <div>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="light"
        variant="light"
        sticky="bottom"
      >
        <Nav className="mr-auto">
          <Nav.Item href="/">
            &copy; {new Date().getFullYear()} Copyright: Developed by Hugo Rodrigues and Julia Carvalho
          </Nav.Item>
        </Nav>
        <Navbar.Brand href="/" className="justify-content-end">
          <img
            src="https://res.cloudinary.com/jmc10/image/upload/v1594927766/myFolder/logo_roboto_mjlb8q.png"
            alt="logo"
          />
        </Navbar.Brand>
      </Navbar>
    </div>
  );
}

export default FooterPage;
