import React from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import '../../../styles/global.scss';
import './Contact.scss';

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <Container>
        <Row className="justify-content-center">
          <Col md={12}>
            <Form className="contact-form">
              <Form.Group className="mb-3" controlId="formName">
                <Form.Label>Your Name</Form.Label>
                <Form.Control type="text" placeholder="Enter your name" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="name@example.com" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formPhone">
                <Form.Label>Phone</Form.Label>
                <Form.Control type="tel" placeholder="+91-XXXXXXXXXX" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formMessage">
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={4}
                  placeholder="How can we help you?"
                />
              </Form.Group>

              <Button type="submit" className="cta-button">
                Send Message
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
