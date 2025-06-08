// AcademicBackground.jsx
import React from 'react';
import { Container, Row, Col, Card, Badge } from 'react-bootstrap';
import { GraduationCap } from 'lucide-react';
import './AcademicBackground.scss';

const educationList = [
  {
    degree: 'Master of Computer Applications (MCA)',
    institution: 'IMED | Bharati Vidyapeeth Deemed University',
    year: '2025',
    location: 'Pune, India',
    highlights: [
      'Mastered ML and Full Stack Development',
      'CGPA: 8.2/10',
      'Involved in multiple projects including a Machine Learning-based industrial project',
    ],
  },
  {
    degree: 'Bachelor of Computer Applications (BCA)',
    institution: 'Maulana Mazharul Haque Arabic and Persian University',
    year: '2022',
    location: 'Patna, India',
    highlights: [
      'Developed strong foundations in programming and software development',
      'Percentage: 74%',
      'Built small-scale applications and participated in coding competitions',
    ],
  },
];

const AcademicBackground = () => {
  return (
    <section className="academic-section py-5">
      <Container>
        <div className="text-center mb-5">
          <h2 className="section-title">Academic Background</h2>
          <p className="text-muted">
            A journey of consistent learning and academic excellence.
          </p>
        </div>
        <Row className="gy-4">
          {educationList.map((edu, index) => (
            <Col md={6} key={index}>
              <Card className="education-card h-100 shadow-sm border-0">
                <Card.Body>
                  <div className="d-flex align-items-start mb-3">
                    <div className="icon-wrapper">
                      <GraduationCap size={24} className="text-primary" />
                    </div>
                    <div className="ms-3">
                      <h5 className="mb-1 degree-title">{edu.degree}</h5>
                      <p className="mb-0 text-muted">
                        {edu.institution} &mdash; {edu.year}
                      </p>
                      <p className="small text-secondary">{edu.location}</p>
                    </div>
                  </div>
                  <ul className="education-highlights ps-3">
                    {edu.highlights.map((point, idx) => (
                      <li key={idx}>{point}</li>
                    ))}
                  </ul>
                  <Badge bg="secondary" className="mt-3">
                    {edu.year}
                  </Badge>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
};

export default AcademicBackground;
