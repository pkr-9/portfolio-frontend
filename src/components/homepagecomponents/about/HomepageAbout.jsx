import React from 'react';
import { motion } from 'framer-motion';
import { Award, Users, Coffee, Heart } from 'lucide-react';
import { Container, Row, Col, Card, ProgressBar } from 'react-bootstrap';
import './HomepageAbout.scss';

const HomepageAbout = () => {
  const stats = [
    { icon: <Award size={24} />, number: '50+', label: 'Projects Completed' },
    { icon: <Users size={24} />, number: '25+', label: 'Happy Clients' },
    { icon: <Coffee size={24} />, number: '1000+', label: 'Cups of Coffee' },
    { icon: <Heart size={24} />, number: '100%', label: 'Passion' },
  ];

  const skills = [
    { skill: 'Java & Spring Boot', level: 90 },
    { skill: 'React & TypeScript', level: 85 },
    { skill: 'Database Design', level: 88 },
    { skill: 'API Development', level: 92 },
  ];

  return (
    <section id="about" className="about-section">
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-5"
        >
          <h2 className="about-heading">About Me</h2>
          <p className="about-subheading">
            Passionate developer crafting digital experiences
          </p>
        </motion.div>

        <Row className="align-items-center g-5">
          {/* Content */}
          <Col lg={6}>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="d-flex flex-column gap-4"
            >
              <Card className="about-card">
                <Card.Body>
                  <Card.Title className="about-title">
                    Creative & Committed
                  </Card.Title>
                  {/* <Card.Text className="about-text">
                    I'm passionate about delivering robust backend architecture,
                    clean code, and smooth user experiences. I blend logic with
                    creativity, backed by a strong foundation in Java, Spring
                    Boot, and problem-solving.
                  </Card.Text> */}
                  <Card.Text className="about-text">
                    With a keen eye for detail and a love for continuous
                    learning, I strive to create solutions that not only meet
                    requirements but exceed expectations. Every project is an
                    opportunity to push boundaries and innovate.
                  </Card.Text>
                </Card.Body>
              </Card>

              <Card className="about-card">
                <Card.Body>
                  <Card.Title className="h5">Skills</Card.Title>
                  <div className="d-flex flex-column gap-3">
                    {skills.map((item, index) => (
                      <div key={index}>
                        <div className="d-flex justify-content-between">
                          <span className="fw-medium text-dark">
                            {item.skill}
                          </span>
                          <span className="text-muted">{item.level}%</span>
                        </div>
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${item.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: index * 0.2 }}
                        >
                          <ProgressBar
                            now={item.level}
                            className="custom-progress"
                          />
                        </motion.div>
                      </div>
                    ))}
                  </div>
                </Card.Body>
              </Card>
            </motion.div>
          </Col>

          {/* Stats */}
          <Col lg={6}>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="row g-3"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="col-6"
                >
                  <Card className="stat-card text-center">
                    <Card.Body>
                      <div className="icon-box mb-3">{stat.icon}</div>
                      <h4 className="stat-number mb-2">{stat.number}</h4>
                      <p className="stat-label mb-0">{stat.label}</p>
                    </Card.Body>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default HomepageAbout;
