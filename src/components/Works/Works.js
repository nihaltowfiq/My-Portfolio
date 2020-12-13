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
      <Container className="my-5">
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
                <h2>{data.title}</h2>
                <p>{data.longDetail}</p>

                <a
                  className="iconStyle"
                  href={data.github_client}
                  rel="noreferrer"
                  target="_blank"
                >
                  <b>Frontend Code</b>
                </a>
                <a
                  className="mx-3 iconStyle"
                  href={data.live}
                  rel="noreferrer"
                  target="_blank"
                >
                  <b>Website</b>
                </a>
                {data.github_server && (
                  <a
                    className="iconStyle"
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
