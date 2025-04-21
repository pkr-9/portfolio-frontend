// src/components/layout/Footer.jsx
import React from 'react';
import { Container, Row, Col, Form, Button } from "react-bootstrap";

const Footer = () => (
  <footer className="footer">
  <Container className="footer-container">
    <Row>
      {/* Logo + About */}
      <Col md={3} className="footer-section text-center text-md-start">
        {/* <div className="footer-logo mx-auto"> */}
          <img src="./logo.png" alt="PrimePark Logo" className="footer-logo mx-auto" />
        {/* </div> */}
        <p className="mt-3">
          Smart Parking Solutions for Modern Cities
        </p>
        <div className="social-links d-flex justify-content-center justify-content-md-start mt-3">
          <a href="#"><i className="fab fa-facebook"></i></a>
          <a href="#"><i className="fab fa-twitter"></i></a>
          <a href="#"><i className="fab fa-linkedin"></i></a>
          <a href="#"><i className="fab fa-instagram"></i></a>
        </div>
      </Col>

      {/* Quick Links */}
      <Col md={3} className="footer-section">
        <h4>Quick Links</h4>
        <ul className="list-unstyled">
          <li><a href="#services">Services</a></li>
          <li><a href="#products">Products</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </Col>

      {/* Contact Info */}
      <Col md={3} className="footer-section">
        <h4>Contact Info</h4>
        <ul className="contact-inf list-unstyled">
          <li><i className="fas fa-map-marker-alt"></i> 123 Parking St, Pune, India</li>
          <li><i className="fas fa-phone"></i> +91 12345 67890</li>
          <li><i className="fas fa-envelope"></i> info@primepark.com</li>
        </ul>
      </Col>

      {/* Newsletter */}
      <Col md={3} className="footer-section">
        <h4>Newsletter</h4>
        <Form className="newsletter-form">
          <Form.Control type="email" placeholder="Enter your email" />
          <Button type="submit" className="mt-2">Subscribe</Button>
        </Form>
      </Col>
    </Row>
  </Container>

  <div className="footer-bottom text-center mt-4">
    <p>&copy; 2024 PrimePark. All rights reserved.</p>
  </div>
</footer>
);

export default Footer;
