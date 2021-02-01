import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import Headroom from "react-headroom";
import { NavLink } from "react-router-dom";
import "./NavigationBar.css";

const NavigationBar = () => {
  return (
    <Headroom style={{ transition: "all 1s ease-in-out" }}>
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
            <Nav className="ml-auto navBar">
              <NavLink exact to="/">
                Home
              </NavLink>
              <NavLink to="about">About</NavLink>
              <NavLink to="/works">Works</NavLink>
              <NavLink to="/blogs">Blogs</NavLink>
              <NavLink to="/contact">Contact</NavLink>
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
