import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import worksData from "../../datas/worksData";
import Footer from "../Footer/Footer";
import NavigationBar from "../Home/NavigationBar/NavigationBar";
import "./Works.css";

const Works = () => {
  const datas = worksData;
  return (
    <div>
      <NavigationBar></NavigationBar>
      <Container className="mt-3 mb-5">
        <h1 className="text-center">
          All of my <span className="textPurple">recent works.</span>
        </h1>
        {datas.map((data) => (
          <Col key={data.title}>
            <Row className="worksCard">
              <Col md={6}>
                <img src={data.img} className="img-fluid" alt="" />
              </Col>
              <Col md={6}>
                <h2 className="">
                  {data.title}{" "}
                  {data.team && (
                    <span style={{ fontSize: "14px", fontStyle: "italic" }}>
                      [Team Project]
                    </span>
                  )}
                </h2>
                <p>{data.longDetail}</p>

                <a
                  className="purple_link"
                  href={data.github_client}
                  rel="noreferrer"
                  target="_blank"
                >
                  <b>Frontend Code</b>
                </a>
                <a
                  className="mx-3 purple_link"
                  href={data.live}
                  rel="noreferrer"
                  target="_blank"
                >
                  <b>Website</b>
                </a>
                {data.github_server && (
                  <a
                    className="purple_link"
                    href={data.github_server}
                    rel="noreferrer"
                    target="_blank"
                  >
                    <b>Backend Code</b>
                  </a>
                )}
              </Col>
            </Row>
          </Col>
        ))}
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default Works;
