// src/pages/ContactPage.jsx
import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import Navigation from '../components/layout/Navbar';
import Footer from '../components/layout/Footer';
import WhyUs from '../components/layout/WhyUs';
import Testimonials from '../components/layout/Testimonials';
import ContactSection from '../components/layout/ContactSection';
import SocialMedia from '../components/specific/SocialMedia';
import '../styles/global.scss';
const ContactPage = () => {
  return (
    <>
      <Navigation />
      <div className="contact-page">
        <h1>Contact Me</h1>
        <WhyUs />
        <SocialMedia />
        <Testimonials />
        <ContactSection />
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
