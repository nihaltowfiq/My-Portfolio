import React from 'react';
import { Container } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedinIn, faMediumM, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer-wrapper">
            <Container className="text-white text-center">
                <div className="icon-wrapper pt-4">
                    <a rel="noreferrer" target="_blank" href="https://www.linkedin.com/in/nihaltowfiq/"><FontAwesomeIcon icon={faLinkedinIn} size='lg' /></a>
                    <a rel="noreferrer" target="_blank" href="https://github.com/nihaltowfiq/"><FontAwesomeIcon icon={faGithub} size='lg' /></a>
                    <a rel="noreferrer" target="_blank" href="https://twitter.com/NihalTowfiq"><FontAwesomeIcon icon={faTwitter} size='lg' /></a>
                    <a rel="noreferrer" target="_blank" href="https://nihaltowfiq.medium.com/"><FontAwesomeIcon icon={faMediumM} size='lg' /></a>
                </div>
                <p className="pt-3 mt-1">designed and built by <a rel="noreferrer" target="_blank" href="https://github.com/nihaltowfiq/" className="textPurple footer-link" >Kazi Nihal Towfiq</a></p>
            </Container>
        </div>
    );
};

export default Footer;