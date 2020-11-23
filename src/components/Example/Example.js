import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import './Example.css';

const Example = () => {
    return (
        <Container className="bg-dark p-5">
            <div className="bgBlack p-5">
                <Row>
                    <Col md={6}>
                        <h1>This is <span className="bgPurple">Example Heading</span></h1>
                        <button className='btn btnPurple'>Nihal</button>
                        <br /> <br />
                        <button className='btn btnOutlineePurple'>Nihal</button>
                    </Col>
                    <Col md={6}>
                        <Card>
                            <Card.Body className="bg-dark">
                                <h5>This is Card</h5>
                                <Card.Text>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Blanditiis soluta officia natus excepturi commodi cum! Voluptas dolore quisquam ad a laudantium, voluptates, natus ratione rerum aliquid ducimus cum repellat libero repellendus velit esse doloremque asperiores? Id vero, eaque eum unde consequuntur fuga, sint quaerat maxime, facere nam iure ratione suscipit.</Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </div>
        </Container>
    );
};

export default Example;