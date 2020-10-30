import React from 'react';
import { Container } from 'react-bootstrap';

const Footer = () => {
    return (
        <div style={{backgroundColor:"#24272b", height:'60px'}}>
            <Container className="text-white text-center">
                <p className="pt-3 mt-1">designed and built by <span className="text-success">ME</span></p>
            </Container>
        </div>
    );
};

export default Footer;