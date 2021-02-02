import React from "react";
import { Container, Form, Row } from "react-bootstrap";
import emailjs from "emailjs-com";
import "./Contact.css";

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "portfolio_template",
        e.target,
        "user_o410fCKZio3rjKs9sEqtt"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };
  return (
    <Container className="pb-3 mt-3 mb-4">
      <h2 className="text-center textPurple">Contact Me</h2>
      <Row className="justify-content-center">
        <Form className="contact-form" onSubmit={sendEmail}>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control
              name="name"
              type="text"
              placeholder="Enter your name"
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Email</Form.Label>
            <Form.Control
              name="email"
              type="email"
              placeholder="Enter your email"
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Subject</Form.Label>
            <Form.Control
              name="subject"
              type="text"
              placeholder="Enter subject"
              required
            />
          </Form.Group>
          <Form.Group>
            <Form.Label>Message</Form.Label>
            <Form.Control
              name="message"
              as="textarea"
              rows={3}
              type="text"
              placeholder="Enter your message"
              required
            />
          </Form.Group>
          <button
            className="btn btnPurple"
            type="submit"
            style={{ width: "120px" }}
          >
            Send
          </button>
        </Form>
      </Row>
    </Container>
  );
};

export default Contact;
