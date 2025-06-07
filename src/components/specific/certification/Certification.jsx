import React, { useState } from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../../../styles/global.scss';
import './Certification.scss';

const certifications = [
  {
    year: '2024',
    title:
      'Oracle Cloud Infrastructure(OCI) 2024 Certified Foundations Associate',
    provider: 'Oracle',
  },
  {
    year: '2024',
    title: 'MongoDB Developers Toolkit',
    provider: 'GeeksforGeeks',
  },
  { year: '2024', title: 'Cloud Computing', provider: 'NPTEL' },
];

const extraCertifications = [
  {
    year: '2024',
    title: 'NLP - Natural Language Processing with Python',
    provider: 'Udemy',
  },
  {
    year: '2023',
    title: 'Python 101 for Data Science',
    provider: 'Cognitive Class',
  },
];

const Certification = () => {
  const [showAll, setShowAll] = useState(false);
  const displayedCerts = showAll
    ? [...certifications, ...extraCertifications]
    : certifications;

  return (
    <section id="certification" className="certification-section">
      <Container>
        <h2 className="certification-section-title">Certifications</h2>
        <Row>
          <Col>
            <ul className="certification-timeline">
              {displayedCerts.map((item, i) => (
                <li key={i}>
                  <span className="certification-timeline-date">
                    {item.year}
                  </span>
                  <div className="certification-timeline-content">
                    <h4>{item.title}</h4>
                    <p>{item.provider}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Col>
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

export default Certification;
