import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListGroup from "react-bootstrap/ListGroup";
import "./style.css";

export default function Contact() {
  return (
    <Container className="mt-5 mb-5 p-2">
      <Row className="text-center mb-5">
        <Col>
          <h1>Let's Connect</h1>
        </Col>
      </Row>
      <Row className="shadow-lg p-3 mb-5 rounded mr-1 ml-1 text-center">
        <Col>
          <ListGroup variant="flush">
            <ListGroup.Item className="mb-1">
              <i className="fas fa-phone fa-2x mb-2"></i>
              <h3>412.973.5385</h3>
            </ListGroup.Item>
            <ListGroup.Item className="mb-1">
              <i className="far fa-envelope fa-2x mb-2"></i>
              <h3>rgr5035@gmail.com</h3>
            </ListGroup.Item>
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
}
