import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import Headroom from "react-headroom";
import { useHistory } from "react-router-dom";
import "./NavigationBar.css";

const NavigationBar = () => {
  const history = useHistory();
  return (
    <Headroom style={{ transition: "all .5s ease-in-out" }}>
      <Container fluid="md">
        <Navbar
          className="text-right bg-black"
          collapseOnSelect
          expand="md"
          variant="dark"
        >
          <Navbar.Toggle
            className="ml-auto"
            aria-controls="responsive-navbar-nav"
          />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link href="" onClick={() => history.push("/")}>
                Home
              </Nav.Link>
              <Nav.Link onClick={() => history.push("/about")}>About</Nav.Link>
              <Nav.Link href="" onClick={() => history.push("/works")}>
                Works
              </Nav.Link>
              <Nav.Link href="" onClick={() => history.push("/blogs")}>
                Blogs
              </Nav.Link>
              <Nav.Link href="" onClick={() => history.push("/contact")}>
                Contact
              </Nav.Link>
            </Nav>
            <button className="btn btnOutlinedPurple btnLink">
              <a
                target="blank"
                href="https://drive.google.com/uc?export=download&id=1CyrtS0XFGD2UdMO5xvdq-Tdt6XZA2qeT"
              >
                Resume
              </a>
            </button>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </Headroom>
  );
};

export default NavigationBar;
