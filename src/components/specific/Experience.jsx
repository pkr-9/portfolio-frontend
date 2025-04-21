import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../../styles/global.scss';

const experiences = [
  { year: '2024', title: 'Spring Boot Internship', desc: 'Built REST APIs and JWT-secured systems.' },
  { year: '2023', title: 'Portfolio Project', desc: 'Created full-stack app using MERN + Tailwind.' },
  { year: '2022', title: 'Graduation - B.Tech', desc: 'Major in CSE. Explored Java, DBMS, and OS.' },
];

const Experience = () => (
  <section id="experience" className="experience-section">
    <Container>
      <h2 className="experience-section-title">Experience</h2>
      <Row>
        <Col>
          <ul className="experience-timeline">
            {experiences.map((item, i) => (
              <li key={i}>
                <span className="experience-timeline-date">{item.year}</span>
                <div className="experience-timeline-content">
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </Col>
      </Row>
    </Container>
  </section>
);

export default Experience;
