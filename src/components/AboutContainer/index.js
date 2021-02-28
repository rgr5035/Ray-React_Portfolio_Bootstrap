import "./style.css";
import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Headshot from "./headshot2.jpg";
import ListGroup from "react-bootstrap/ListGroup";

export default function AboutContainer() {
  return (
    <Container className="mt-5 mb-5 p-2">
      <Row className="text-center mb-5">
        <Col>
          <h1>Nice To Meet You!</h1>
        </Col>
      </Row>
      <Row className="text-center mr-1 ml-1">
        <Col lg={4}>
          <Image
            src={Headshot}
            roundedCircle
            width="100%"
            className="shadow p-1 align-center mb-3"
          />
          <ListGroup variant="flush" className="mb-4">
            <ListGroup.Item>
              <h5>Robby Ray</h5>
            </ListGroup.Item>
            <ListGroup.Item>
              <h5>Full Stack Web Developer</h5>
            </ListGroup.Item>
          </ListGroup>
        </Col>
        <Col lg={1}></Col>
        <Col lg={7} className="shadow-lg rounded">
          <Row className="text-center mt-3 mb-3">
            <Col md={12}>
              <h2>A little bit about myself...</h2>
            </Col>
          </Row>
          <Row className="text-center mt-2 mb-3">
            <Col>
              <h5>
                I hold a firm belief that if you work diligently and set your
                mind to a goal, then anything is possible. This is what drives
                me through my professional career. After working professionally
                for over ten years in the event planning industry for many
                reputable companies across the world, including Walt Disney
                Parks & Resorts, I was met with a common enemy in 2020 -
                furlough due to COVID-19. As hospitality drastically shifted, I
                was faced with a decision of where I wanted to take my
                professional career. I have always been fascinated by
                technology, and the gamer nerd inside of me begged to explore
                this further. I immediately dove headfirst into the world of
                coding by enrolling in my current education at University of
                Denver. I have barely scratched the surface of this electrifying
                new industry, and I cannot wait to continue to hone my skills as
                a Full Stack Web Developer. Let's start creating!
              </h5>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}
