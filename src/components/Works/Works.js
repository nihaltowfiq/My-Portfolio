import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import worksData from '../../datas/worksData';
import Footer from '../Footer/Footer';
import NavigationBar from '../Home/NavigationBar/NavigationBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import './Works.css';

const Works = () => {
    const datas = worksData;
    return (
        <div>
            <NavigationBar></NavigationBar>
            <Container className="my-5">
                <h1 className="text-center">All of my <span className="text-success">recent works.</span></h1>
                {
                    datas.map(data =>
                        <Col key={data.title}>
                            <Row className="worksCard">
                                <Col md={6}>
                                    <img src={data.img} className="img-fluid" alt="" />
                                </Col>
                                <Col md={6}>
                                    <h2>{data.title}</h2>
                                    <p>{data.longDetail}</p>
                                    <a className="mr-3 iconStyle" href={data.live} rel="noreferrer" target="_blank" ><FontAwesomeIcon icon={faExternalLinkAlt} size="2x" /></a>
                                    <a className="iconStyle" href={data.github} rel="noreferrer" target="_blank" ><FontAwesomeIcon icon={faGithub} size="2x" />
                                    </a>
                                </Col>
                            </Row>
                        </Col>
                    )
                }
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Works;