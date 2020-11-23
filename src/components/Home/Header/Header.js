import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import './Header.css';
import myPic from '../../../images/myPicture.jpg';
import Typical from 'react-typical';

const Header = () => {
    const history = useHistory();
    return (
        <Container className="mt-2 mb-4 pb-5">
            <Row className="">
                <Col md="6" className="text-white">
                    <div className="pt-5 mt-5 pl-5">
                        <h5 className="textPurple">Hello I'm</h5>
                        <h1 style={{ fontSize: '50px', fontWeight: '700' }}>KAZI NIHAL TOWFIQ</h1>
                        <Typical
                            steps={['Web Developer', 1000, 'Programmer', 500, 'MERN Stack Developer', 1000]}
                            loop={Infinity}
                            wrapper="h5"
                            className="textPurple"
                        />
                        <p>A self-motivated and enthusiastic web developer with a deep interest in JavaScript. I develop web applications. My core skill is based on Javascript and I love to do most of the things using JavaScript and React JS.</p>
                        <div className="mt-3">                            
                            <button onClick={() => history.push('/about')} className="mr-3 btn btnPurple" size="lg" >About Me</button>
                            <button className="btn btnOutlinedPurple" target="_blank" href="https://drive.google.com/uc?export=download&id=10_hv5G5r7rJ8qog56dovc9eKbJndB_vM" size="lg">Get Resume</button>
                        </div>
                    </div>
                </Col>
                <Col md="6" className="text-right">
                    <img src={myPic} alt="" className="img-fluid ml-4 p-2 mt-5 header-pic" />
                </Col>
            </Row>
            
        </Container>
    );
};

export default Header;