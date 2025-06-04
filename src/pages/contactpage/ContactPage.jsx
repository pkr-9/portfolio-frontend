// import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Navigation from '../../components/layout/navbar/Navbar';
import Footer from '../../components/layout/footer/Footer';
import Contact from '../../components/layout/contact/Contact';

import '../../styles/global.scss';
import './ContactPage.scss';

const ContactPage = () => {
  return (
    <>
      <Navigation />

      <div className="contact-page">
        <section className="social-contact-section">
          <Container>
            <Row className="gy-4 align-items-start">
              <Contact />
            </Row>
          </Container>
        </section>
      </div>

      <Footer />
    </>
  );
};

export default ContactPage;
