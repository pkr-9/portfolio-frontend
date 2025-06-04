// StrengthCard.jsx (React Bootstrap version)

import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import { motion } from 'framer-motion';
import { CheckCircle, Target, Code, Users } from 'lucide-react';
import './StrengthCard.scss';

const strengths = [
  {
    icon: <Target size={32} />,
    title: 'Problem Solving',
    description:
      'Strong analytical skills to debug, optimize, and deliver scalable backend solutions.',
    color: 'gradient-emerald-teal',
  },
  {
    icon: <Code size={32} />,
    title: 'Clean Code',
    description:
      'Focus on writing maintainable, readable, and testable code following SOLID principles.',
    color: 'gradient-blue-indigo',
  },
  {
    icon: <CheckCircle size={32} />,
    title: 'Spring Boot Mastery',
    description:
      'Hands-on experience building RESTful APIs, integrating databases, and configuring microservices.',
    color: 'gradient-purple-pink',
  },
  {
    icon: <Users size={32} />,
    title: 'Team Collaboration',
    description:
      'Excellent communication and collaboration skills in agile development environments.',
    color: 'gradient-orange-red',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const itemVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const StrengthCard = () => {
  return (
    <section className="strength-section py-5">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-5"
        >
          <h2 className="display-5 fw-bold text-dark mb-3">My Strengths</h2>
          <p className="lead text-muted">
            Core competencies that drive exceptional results
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Row className="g-4">
            {strengths.map((strength, idx) => (
              <Col md={6} key={idx}>
                <motion.div
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  className="group card-wrapper"
                >
                  <Card className="strength-card text-center border-0 shadow-sm position-relative">
                    <div className={`icon-wrapper ${strength.color}`}>
                      {strength.icon}
                    </div>
                    <Card.Body>
                      <Card.Title className="fs-4 fw-semibold">
                        {strength.title}
                      </Card.Title>
                      <Card.Text>{strength.description}</Card.Text>
                    </Card.Body>
                    <div className={`hover-overlay ${strength.color}`}></div>
                    <div className={`hover-bar ${strength.color}`}></div>
                  </Card>
                </motion.div>
              </Col>
            ))}
          </Row>
        </motion.div>
      </Container>
    </section>
  );
};

export default StrengthCard;
