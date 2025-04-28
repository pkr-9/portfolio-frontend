import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../../../styles/global.scss';
import './ServicesSection.scss';

const services = [
  {
    title: 'Housekeeping Services',
    img: 'https://picsum.photos/400/300?1',
    list: [
      'Office, hospital, mall, and school cleaning',
      'Sanitization and deep cleaning',
    ],
  },
  {
    title: 'Ward Boy / Patient Care',
    img: 'https://picsum.photos/400/300?2',
    list: ['Bed bath, feeding, patient hygiene', '24/7 Elderly care'],
  },
  {
    title: 'Security Services',
    img: 'https://picsum.photos/400/300?3',
    list: ['Patrolling, fire drills, log management'],
  },
  {
    title: 'Gardening',
    img: 'https://picsum.photos/400/300?4',
    list: ['Landscaping, seasonal gardening', 'Hedge trimming'],
  },
];

const ServicesSection = () => (
  <section id="services" className="services">
    <h2>Our Services</h2>
    <div className="labor-highlight">
      <h2>Labor Supply – Our Core Strength</h2>
      <p>
        We specialize in skilled/semi-skilled labor for factories, events,
        hospitals, and institutions.
      </p>
    </div>
    <Container className="service-grid">
      <Row>
        {services.map((s, i) => (
          <Col key={i} md={6} lg={3} className="d-flex">
            <Card className="service-card flex-fill d-flex flex-column">
              <Card.Img src={s.img} />
              <Card.Body className="d-flex flex-column justify-content-between">
                <Card.Title className="text-center mb-3">{s.title}</Card.Title>
                <ul>
                  {s.list.map((l, j) => (
                    <li key={j}>{l}</li>
                  ))}
                </ul>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  </section>
);

export default ServicesSection;
