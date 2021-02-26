import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

export default function PortfolioFooter() {
  return (
    <Navbar
      bg="dark"
      variant="dark"
      fixed="bottom"
      style={{ display: "flex", justifyContent: "center" }}
    >
      <Nav>
        <Nav.Item className=" pr-2 pl-2">
          <Nav.Link
            href="https://www.linkedin.com/in/robertgordonray/"
            className="fab fa-linkedin fa-2x"
            target="_blank"
          ></Nav.Link>
        </Nav.Item>
        <Nav.Item className=" pr-2 pl-2">
          <Nav.Link
            href="https://github.com/rgr5035"
            className="fab fa-github fa-2x"
            target="_blank"
          ></Nav.Link>
        </Nav.Item>
        <Nav.Item className=" pr-2 pl-2">
          <Nav.Link
            href="https://www.facebook.com/robert.r.ray.98"
            className="fab fa-facebook fa-2x"
            target="_blank"
          ></Nav.Link>
        </Nav.Item>
      </Nav>
    </Navbar>
  );
}
