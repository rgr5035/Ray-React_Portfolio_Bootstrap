import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ProjectCard from "../components/Project";
import Projects from "../project";
import { propTypes } from "react-bootstrap/esm/Image";

export default function Portfolio() {
  return (
    <Container className="mt-5 mb-5 p-2">
      <Row className="text-center mb-5">
        <Col>
          <h1>Professional Portfolio</h1>
        </Col>
      </Row>
      {Projects.map((project) => {
        return (
          <ProjectCard
            image={project.image}
            title={project.title}
            desc={project.desc}
            hrefGH={project.hrefGH}
            hrefLS={project.hrefLS}
          />
        );
      })}

      <ProjectCard />
    </Container>
  );
}
