import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
import myPic from '../../../images/myPicture.jpg';

const Header = () => {
    return (
        <Container className="my-5">
            <Row className="mt-5">
                <Col md="6" className="text-white">
                    <div className="pt-5 mt-5 pl-5">
                        <h5 className="text-success">Hello I'm</h5>
                        <h1>KAZI NIHAL TOWFIQ</h1>
                        <h5 className="text-success">Web Developer</h5>
                        <p>A self-motivated and enthusiastic web developer with a deep interest in JavaScript. I develop web applications. My core skill is based on Javascript and I love to do most of the things using JavaScript and React JS.</p>
                        <div className="mt-3">
                            <Button href="/about" className="mr-3" size="lg" variant="success">About Me</Button>
                            <Button target="_blank" href="https://drive.google.com/file/d/10_hv5G5r7rJ8qog56dovc9eKbJndB_vM/view?usp=sharing" variant="outline-success" size="lg">Resume</Button>
                        </div>
                    </div>

                </Col>
                <Col md="6">
                    <img src={myPic} alt="" className="img-fluid p-5" style={{ borderRadius: '50%', height: '500px' }} />
                </Col>
            </Row>
        </Container>
    );
};

export default Header;