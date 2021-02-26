import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import ListGroup from "react-bootstrap/ListGroup";
import Nav from "react-bootstrap/Nav";

export default function ProjectCard(props) {
  return (
    <Row className="shadow-lg p-3 mb-5 rounded mr-1 ml-1">
      <Col md={6}>
        <Image src={props.image} thumbnail></Image>
      </Col>
      <Col md={6}>
        <h3 className="p-2 text-center">{props.title}</h3>
        <h5 className="p-2 text-center">{props.desc}</h5>
        <ListGroup variant="flush">
          <ListGroup.Item>
            <Nav.Link
              href={props.hrefGH}
              target="_blank"
              className="text-center"
            >
              GitHub
            </Nav.Link>
          </ListGroup.Item>
          <ListGroup.Item>
            <Nav.Link
              href={props.hrefLS}
              target="_blank"
              className="text-center"
            >
              Live Site
            </Nav.Link>
          </ListGroup.Item>
        </ListGroup>
      </Col>
    </Row>
  );
}
