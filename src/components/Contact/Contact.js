import React from 'react';
import { Button, Container, Form, Row } from 'react-bootstrap';
import Footer from '../Footer/Footer';
import NavigationBar from '../Home/NavigationBar/NavigationBar';
import emailjs from 'emailjs-com';
import './Contact.css';

const Contact = () => {
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('gmail', 'portfolio_template', e.target, 'user_o410fCKZio3rjKs9sEqtt')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
        e.target.reset();
    };
    return (
        <div>
            <NavigationBar></NavigationBar>
            <Container className="py-5 my-5">
                <Row className="justify-content-md-center">
                    <Form className="contact-form" onSubmit={sendEmail}>
                        <Form.Group >
                            <Form.Label>Name</Form.Label>
                            <Form.Control name="name" type="text" placeholder="Enter your name" required />
                        </Form.Group>

                        <Form.Group >
                            <Form.Label>Email</Form.Label>
                            <Form.Control name="email" type="email" placeholder="Enter your email" required />
                        </Form.Group>

                        <Form.Group >
                            <Form.Label>Subject</Form.Label>
                            <Form.Control name="subject" type="text" placeholder="Enter subject" required />
                        </Form.Group>

                        <Form.Group >
                            <Form.Label>Message</Form.Label>
                            <Form.Control name="message" as="textarea" rows={3} type="text" placeholder="Enter your message" required />
                        </Form.Group>

                        <Button variant="success" type="submit" style={{width:'120px'}}>Send</Button>
                    </Form>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Contact;