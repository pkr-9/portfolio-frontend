import { motion } from 'framer-motion';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Database, Code2, Server, Wrench, BrainCircuit } from 'lucide-react';
import './TechStack.scss';

const TechStack = () => {
  const technologies = [
    {
      icon: <BrainCircuit size={32} />,
      title: 'ML & Python Ecosystem',
      description: 'Python & Scripting, NLP, Scikit-learn',
      color: 'teal-indigo',
    },
    {
      icon: <Code2 size={32} />,
      title: 'Frontend Development',
      description: 'React, Redux, Bootstrap, SCSS, JavaScript',
      color: 'blue-cyan',
    },
    {
      icon: <Server size={32} />,
      title: 'Backend & API',
      description: 'MVC, Spring Boot, Node.js, JPA, RESTful',
      color: 'green-emerald',
    },
    {
      icon: <Database size={32} />,
      title: 'Database & DevOps',
      description: 'MySQL, MongoDB, Oracle XE, Docker',
      color: 'purple-pink',
    },
    {
      icon: <Wrench size={32} />,
      title: 'Tools & Methodologies',
      description: 'Git, Postman, CI/CD, Agile, DSA',
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
          <Row xs={1} sm={2} md={2} lg={5} xl={5} className="g-4">
            {technologies.map((tech, index) => (
              <Col key={index} className="d-flex">
                <motion.div
                  variants={itemVariants}
                  whileHover={{ scale: 1.05 }}
                  className="w-100"
                >
                  <Card className="tech-card shadow-sm border-0 position-relative h-100">
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
