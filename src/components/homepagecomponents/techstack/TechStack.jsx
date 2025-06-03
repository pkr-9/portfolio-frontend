import React from 'react';
import { motion } from 'framer-motion';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Code, Database, Globe, Smartphone } from 'lucide-react';
import './TechStack.scss';

const TechStack = () => {
  const technologies = [
    {
      icon: <Code size={32} />,
      title: 'Frontend Development',
      description: 'React, TypeScript, Next.js',
      color: 'blue-cyan',
    },
    {
      icon: <Database size={32} />,
      title: 'Backend Development',
      description: 'Java, Spring Boot, Node.js',
      color: 'green-emerald',
    },
    {
      icon: <Globe size={32} />,
      title: 'Web Technologies',
      description: 'REST APIs, GraphQL',
      color: 'purple-pink',
    },
    {
      icon: <Smartphone size={32} />,
      title: 'Mobile & Cloud',
      description: 'React Native, AWS, Docker',
      color: 'orange-red',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
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

  return (
    <section className="techstack-section py-5">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-5"
        >
          <h2 className="display-5 fw-bold mb-3">Tech Stack</h2>
          <p className="lead text-muted">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          <Row xs={1} md={2} lg={4} className="g-4">
            {technologies.map((tech, index) => (
              <Col key={index}>
                <motion.div
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                >
                  <Card className="tech-card shadow-sm border-0 position-relative">
                    <div
                      className={`icon-container gradient-${tech.color} mb-4`}
                    >
                      {tech.icon}
                    </div>
                    <Card.Body>
                      <Card.Title className="fw-semibold text-dark">
                        {tech.title}
                      </Card.Title>
                      <Card.Text className="text-muted">
                        {tech.description}
                      </Card.Text>
                    </Card.Body>
                    <div className={`hover-overlay gradient-${tech.color}`} />
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

export default TechStack;
