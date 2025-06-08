import React, { useState } from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

// Import icons from react-icons packs
import {
  FaReact,
  FaNodeJs,
  FaJava,
  FaPython,
  FaDocker,
  FaGitAlt,
} from 'react-icons/fa';
import {
  SiSpringboot,
  SiMongodb,
  SiMysql,
  SiRedux,
  SiPostman,
  SiJira,
  SiJest,
  SiTensorflow,
  SiPandas,
  SiNumpy,
} from 'react-icons/si';

import '../../../styles/global.scss';
import './Skills.scss';

const techSkills = [
  { title: 'MERN Stack', icon: <FaReact size={36} color="#61DBFB" /> },
  {
    title: 'Java (Core + Advanced)',
    icon: <FaJava size={36} color="#007396" />,
  },
  { title: 'Spring Boot', icon: <SiSpringboot size={36} color="#6DB33F" /> },
  {
    title: 'Databases (MySQL, MongoDB)',
    icon: <SiMysql size={34} color="#00758F" />,
  },
  { title: 'Docker', icon: <FaDocker size={36} color="#2496ED" /> },
  { title: 'Python', icon: <FaPython size={36} color="#3776AB" /> },
  {
    title: 'TensorFlow (ML)',
    icon: <SiTensorflow size={28} color="#FF6F00" />,
  },
  { title: 'NumPy', icon: <SiNumpy size={28} color="#013243" /> },
];

const extraSkills = [
  { title: 'Redux', icon: <SiRedux size={28} color="#764ABC" /> },
  { title: 'Postman', icon: <SiPostman size={28} color="#FF6C37" /> },
  { title: 'JIRA & Agile', icon: <SiJira size={28} color="#0052CC" /> },
  { title: 'Pandas', icon: <SiPandas size={28} color="#150458" /> },
  { title: 'JUnit & Jest', icon: <SiJest size={28} color="#C21325" /> },
  { title: 'Git', icon: <FaGitAlt size={36} color="#F05032" /> },
];

const Skills = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedSkills = showAll
    ? [...techSkills, ...extraSkills]
    : techSkills;

  return (
    <section id="skills" className="skills-section">
      <Container>
        <h2 className="skill-section-title">Tech Stack</h2>
        <Row className="justify-content-center">
          {displayedSkills.map((skill, idx) => (
            <Col key={idx} xs={6} sm={4} md={3} className="mb-4">
              <Card className="skill-card text-center">
                <Card.Body>
                  <div className="skill-icon">{skill.icon}</div>
                  <Card.Title>{skill.title}</Card.Title>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
        <div className="text-end mt-4">
          <Button
            variant="outline-primary"
            className="view-toggle-button"
            onClick={() => setShowAll(!showAll)}
          >
            {showAll ? 'View Less' : 'View More'}
          </Button>
        </div>
      </Container>
    </section>
  );
};

export default Skills;
