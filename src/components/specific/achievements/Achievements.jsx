import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../../../styles/global.scss';
import './Achievements.scss';

const certifications = [
  { title: 'Java Backend', provider: 'Udemy', date: '2024' },
  { title: 'React Mastery', provider: 'FreeCodeCamp', date: '2023' },
  { title: 'Oracle SQL Expert', provider: 'Oracle', date: '2023' },
];

const Achievements = () => (
  <section id="achievements" className="achievements-section">
    <Container>
      <h2 className="section-title">Certifications</h2>
      <Row>
        {certifications.map((cert, i) => (
          <Col key={i} md={4} className="mb-4">
            <Card className="achievement-card">
              <Card.Body>
                <Card.Title>{cert.title}</Card.Title>
                <Card.Text>
                  <strong>Provider:</strong> {cert.provider}
                  <br />
                  <strong>Year:</strong> {cert.date}
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  </section>
);

export default Achievements;
