import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Navigation from '../../components/layout/navbar/Navbar';
import Footer from '../../components/layout/footer/Footer';
import Contact from '../../components/layout/contact/Contact';
import SocialMedia from '../../components/specific/socialmedia/SocialMedia';

import '../../styles/global.scss';
import './ContactPage.scss';

const ContactPage = () => {
  return (
    <>
      <Navigation />

      <div className="contact-page">
        <section className="social-contact-section">
          <Container>
            <h2>Contact Me</h2>
            <p>
              Looking to hire reliable facility staff or need professional
              housekeeping services? We’re here to help!
            </p>
            <Row className="align-items-center">
              <Col lg={6} md={12} className="social-side">
                <SocialMedia />
              </Col>
              <Col lg={6} md={12} className="contact-side">
                <Contact />
              </Col>
            </Row>
          </Container>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default ContactPage;
