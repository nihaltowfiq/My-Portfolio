import React from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";
import "./SomeWorks.css";
import { useHistory } from "react-router-dom";
import worksData from "../../../datas/worksData";

const SomeWorks = () => {
  //   const workDatas = datas;
  const workDatas = worksData.slice(0, 6);
  const history = useHistory();
  return (
    <Container id="works" className="mt-5 pb-5 text-white">
      <div style={{ display: "flex", flexWrap: "wrap" }}>
        <h2>
          <span className="textPurple">Some of</span> my works
        </h2>
        <button
          onClick={() => history.push("/works")}
          className="ml-5 btn btnOutlinedPurple"
          size="xs"
        >
          Show More
        </button>
      </div>
      <Row className="mt-5">
        {workDatas.map((workData) => (
          <Col key={workData.title} md="4">
            <Card className="mb-3">
              <Card.Img height="180px" variant="top" src={workData.img} />
              <Card.Body className="cardBody">
                <h5>{workData.title} </h5>
                <Card.Text>{workData.shortDetail}</Card.Text>
                <a
                  className="mr-3 iconStyle"
                  href={workData.live}
                  rel="noreferrer"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faExternalLinkAlt} size="lg" />
                </a>
                <a
                  className="iconStyle"
                  href={workData.github_client}
                  rel="noreferrer"
                  target="_blank"
                >
                  <FontAwesomeIcon icon={faGithub} size="lg" />
                </a>
                <div className="mt-2">
                  {workData.technology.map((tech) => (
                    <small key={tech} className="pr-2">
                      {tech}
                    </small>
                  ))}
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default SomeWorks;
