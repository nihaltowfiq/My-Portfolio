import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import myPic from '../../images/myPicture.jpg';
import './About.css';
import Footer from '../Footer/Footer';
import NavigationBar from '../Home/NavigationBar/NavigationBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';

const About = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <Container className="fullHeight text-white pt-5">
                <Row className="pt-5">
                    <Col md="6">
                        <div className="ml-5">
                            <img style={{ borderRadius: '50%', height: '250px' }} src={myPic} className="img-fluid" alt="" />
                        </div>
                        <h3 className="pt-4 pb-1">I'm <span className="text-success">Kazi Nihal Towfiq</span></h3>
                        <p>A self-motivated and enthusiastic web developer with a deep interest in JavaScript. I develop web applications. My core skill is based on Javascript and I love to do most of the things using JavaScript and React JS.</p>
                    </Col>
                    <Col md="6">
                        <h3 className="mt-5 pt-2">Skills - <span className="text-success">Technology & Tools</span></h3>
                        <div className="technology pt-2">
                            <span>JavaScript</span>
                            <span>ES6</span>
                            <span>React JS</span>
                            <span>Node JS</span>
                            <span>Express JS</span>
                            <span>MongoDB</span>
                            <span>Redux JS</span>
                            <span>Rest API</span>
                            <span>Git</span>
                            <span>NPM</span>
                            <span>Firebase</span>
                            <span>Heroku</span>
                            <span>Netlify</span>
                            <span>HTML</span>
                            <span>CSS</span>
                            <span>Bootstrap</span>
                            <span>Material-UI</span>
                        </div>
                        <div className="findMe mt-3">
                            <h3 className="pb-3">Find <span className="text-success">Me</span></h3>
                            <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/nihaltowfiq/"><FontAwesomeIcon icon={faLinkedin} size='2x' /></a>
                            <a rel="noreferrer" target="_blank" href="https://github.com/nihaltowfiq/"><FontAwesomeIcon icon={faGithub} size='2x' /></a>
                            <a rel="noreferrer" target="_blank" href="https://twitter.com/NihalTowfiq"><FontAwesomeIcon icon={faTwitter} size='2x' /></a>
                        </div>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default About;