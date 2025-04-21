import React, { useState } from 'react';
import { Container, Form, Button, Row, Col, Alert } from 'react-bootstrap';
import '../../styles/global.scss';

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="contact-section">
      <Container>
        <h2 className="section-title">Contact Me</h2>
        <Row className="justify-content-center">
          <Col md={8}>
            <Form onSubmit={handleSubmit}>
              <Form.Group controlId="name" className="mb-3">
                <Form.Label>Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" required />
              </Form.Group>
              <Form.Group controlId="email" className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter your email" required />
              </Form.Group>
              <Form.Group controlId="message" className="mb-3">
                <Form.Label>Message</Form.Label>
                <Form.Control as="textarea" rows={4} required />
              </Form.Group>
              <Button type="submit" variant="primary">Send Message</Button>
            </Form>
            {submitted && (
              <Alert variant="success" className="mt-3">
                Message sent successfully!
              </Alert>
            )}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
