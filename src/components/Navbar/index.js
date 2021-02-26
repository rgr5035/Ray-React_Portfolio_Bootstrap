import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import PDF from "./RR.CV.2021.INT.pdf";

export default function PortfolioNavBar() {
  return (
    <Navbar bg="dark" expand="lg" variant="dark" className="shadow-lg">
      <Navbar.Brand href="/about">Robby Ray</Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/portfolio">Portfolio</Nav.Link>
          <Nav.Link href={PDF} target="_blank">
            Resume
          </Nav.Link>
          <Nav.Link href="/contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
