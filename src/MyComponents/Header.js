import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header(props) {
  return (
    <Navbar bg="light" variant="light">
      <Link to="/" className="logo">
        {props.title}
      </Link>
      <Nav className="mr-auto">
        <Link to="/" className="links">
          Home
        </Link>
        <Link to="/about" className="links">
          About
        </Link>
      </Nav>
    </Navbar>
  );
}
