import React from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons'
import travelGuru from '../../../images/travelGuru.png';
import volunteerNetwork from '../../../images/volunteerNetwork.png';
import creativeAgency from '../../../images/creativeAgency.png';
import './SomeWorks.css';
import { useHistory } from 'react-router-dom';

const datas = [
    {
        title: "Creative Agency",
        detail: "A MERN stack web application built with ReactJS, MongoDB, NodeJS.",
        img: creativeAgency,
        live: "https://creative-agency-basic.web.app/",
        github: "https://github.com/nihaltowfiq/Creative-Agency",
        technology: ['React', 'ExpressJS', 'MongoDB', 'Firebase', 'Bootstrap']
    },
    {
        title: "Volunteer Network",
        detail: "A MERN stack web application built with ReactJS, MongoDB, NodeJS.",
        img: volunteerNetwork,
        live: "https://volunteer-network-basic.web.app/",
        github: "https://github.com/nihaltowfiq/Volunteer-Network",
        technology: ['React', 'ExpressJS', 'MongoDB', 'Firebase', 'Bootstrap']
    },
    {
        title: "Travel Guru",
        detail: "A front-end web page built with ReactJS and React-Bootstrap.",
        img: travelGuru,
        live: "https://travel-guru-practice.web.app/",
        github: "https://github.com/nihaltowfiq/Travel-Guru",
        technology: ['React', 'Firebase', 'Bootstrap']
    }
];

const SomeWorks = () => {
    const workDatas = datas;
    const history = useHistory();
    return (
        <Container id="works" className="mt-5 pb-5 text-white">
            <div style={{display:'flex', flexWrap:'wrap'}}>
                <h2><span className="textPurple">Some of</span> my works</h2>
                <button onClick={() => history.push('/works')} className="ml-5 btn btnOutlinedPurple" size="xs">Show More</button>
            </div>
            <Row className="mt-5">
                {
                    workDatas.map(workData =>
                        <Col key={workData.title} md="4">
                            <Card className="mb-3">
                                <Card.Img height="180px" variant="top" src={workData.img} />
                                <Card.Body className="cardBody">
                                    <h5>{workData.title} </h5>
                                    <Card.Text>{workData.detail}</Card.Text>
                                    <a className="mr-3 iconStyle" href={workData.live} rel="noreferrer" target="_blank" ><FontAwesomeIcon icon={faExternalLinkAlt} size="lg" /></a>
                                    <a className="iconStyle" href={workData.github} rel="noreferrer" target="_blank" ><FontAwesomeIcon icon={faGithub} size="lg" />
                                    </a>
                                    <div className="mt-2">
                                        {
                                            workData.technology.map(tech =>
                                                <small key={tech} className="pr-2">{tech}</small>
                                            )
                                        }
                                    </div>
                                </Card.Body>
                            </Card>
                        </Col>
                    )
                }
            </Row>
        </Container>
    );
};

export default SomeWorks;