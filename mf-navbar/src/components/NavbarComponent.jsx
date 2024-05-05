import React from "react";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { NavLink } from "react-router-dom";

const NavbarComponent = () => {
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand as={NavLink} to={"/"}>
            Home
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to={"/characters"}>
              Characters
            </Nav.Link>
            <Nav.Link as={NavLink} to={"/about"}>
              About
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarComponent;
