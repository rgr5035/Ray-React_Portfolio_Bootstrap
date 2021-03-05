import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Link } from "react-router-dom";
import PDF from "./RR.CV.2021.INT.pdf";
import "./style.css";

export default function PortfolioNavBar() {
  return (
    <Navbar bg="dark" expand="lg" variant="dark" className="shadow-lg navbar">
      <Navbar.Brand>
        <Link style={{ textDecoration: "none", color: "inherit" }} to="/about">
          Robby Ray
        </Link>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link>
            <Link
              style={{ textDecoration: "none", color: "inherit" }}
              to="/portfolio"
            >
              Portfolio
            </Link>
          </Nav.Link>
          <Nav.Link href={PDF} target="_blank">
            Resume
          </Nav.Link>
          <Nav.Link>
            <Link
              style={{ textDecoration: "none", color: "inherit" }}
              to="/contact"
            >
              Contact
            </Link>
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
