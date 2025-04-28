import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../../../styles/global.scss';
import './AboutSection.scss';

const aboutItems = [
  {
    title: 'Our Vision',
    img: 'https://picsum.photos/500/300',
    desc: `We envision a future where every individual has access to dignified employment and every organization can rely on skilled professionals...`,
  },
  {
    title: 'Our Mission',
    img: 'https://picsum.photos/500/300',
    desc: `Swpris Facilities is a people-first facility management startup providing tailored staffing solutions...`,
  },
  {
    title: 'Our Operations',
    img: 'https://picsum.photos/500/300',
    desc: `Our operations are powered by cutting-edge tools ensuring exceptional service delivery.`,
  },
];

const AboutSection = () => (
  <section id="about" className="about">
    <h2>About Us</h2>
    <div className="about-highlight">
      <h2>Our Commitment</h2>
      <p>
        At Swpris Facilities, we pride ourselves on being a dependable provider
        of skilled professionals and facility services...
      </p>
    </div>
    <Container className="about-content">
      <Row className="g-4 justify-content-center">
        {aboutItems.map((item, i) => (
          <Col key={i} xs={12} sm={6} md={4}>
            <Card className="about-card h-100 text-center shadow-sm">
              <Card.Img variant="top" src={item.img} className="about-img" />
              <Card.Body>
                <Card.Title className="about-title">{item.title}</Card.Title>
                <Card.Text className="about-desc">{item.desc}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  </section>
);

export default AboutSection;
