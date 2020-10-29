import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';

const NavigationBar = () => {
    return (
        <Container fluid="md">
            <Navbar className="text-right" collapseOnSelect expand="md" bg="dark" variant="dark">
                <Navbar.Toggle className="ml-auto" aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">About</Nav.Link>
                        <Nav.Link href="#pricing">Works</Nav.Link>
                        <Nav.Link href="#pricing">Blogs</Nav.Link>
                        <Nav.Link href="#pricing">Contact</Nav.Link>                        
                    </Nav>
                    <Button variant="outline-success">Resume</Button>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    );
};

export default NavigationBar;