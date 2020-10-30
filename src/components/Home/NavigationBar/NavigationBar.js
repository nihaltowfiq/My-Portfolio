import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const NavigationBar = () => {
    const history = useHistory();
    return (
        <Container fluid="md">
            <Navbar className="text-right" collapseOnSelect expand="md" bg="dark" variant="dark">
                <Navbar.Toggle className="ml-auto" aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ml-auto">
                        <Nav.Link href="" onClick={() => history.push('/')}>Home</Nav.Link>
                        <Nav.Link onClick={() => history.push('/about')}>About</Nav.Link>
                        <Nav.Link href="" onClick={() => history.push('/works')}>Works</Nav.Link>
                        <Nav.Link href="" onClick={() => history.push('/blogs')}>Blogs</Nav.Link>
                        <Nav.Link href="" onClick={() => history.push('/contact')}>Contact</Nav.Link>
                    </Nav>
                    <Button target="_blank" href="https://drive.google.com/file/d/10_hv5G5r7rJ8qog56dovc9eKbJndB_vM/view?usp=sharing" variant="outline-success">Resume</Button>
                </Navbar.Collapse>
            </Navbar>
        </Container>
    );
};

export default NavigationBar;