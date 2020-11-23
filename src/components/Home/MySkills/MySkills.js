import React from 'react';
import { Container } from 'react-bootstrap';
import { skill } from '../../../datas/skill';
import './MySkills.css';

const MySkills = () => {
    const mySkill = skill;
    return (
        <Container className="my-5">
            <h2 className="mb-3">My Skill - <span className="textPurple">Technology & Tools</span></h2>
            <div className="skill">
                {
                    mySkill.map(({ name, percent }) => (
                        <div key={name} className="card">
                            <h6>{name}</h6>
                            <p>{percent}%</p>
                            <div style={{ width: percent + "%" }} className="progress-ar" />
                        </div>
                    ))
                }
            </div>
        </Container>
    );
};

export default MySkills;