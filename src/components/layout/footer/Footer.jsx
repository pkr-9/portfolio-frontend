// Footer.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import {
  Github,
  Linkedin,
  Mail,
  Heart,
  ArrowUp,
  MapPin,
  Phone,
  Send,
  ExternalLink,
} from 'lucide-react';
import './Footer.scss';

const Footer = () => {
  const location = useLocation();
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    {
      icon: <Github size={20} />,
      href: 'https://github.com/pappukumarme9999',
      label: 'GitHub',
    },
    {
      icon: <Linkedin size={20} />,
      href: 'https://www.linkedin.com/in/pappu-kumar-gupta',
      label: 'LinkedIn',
    },
    {
      icon: <Mail size={20} />,
      href: 'mailto:pappukumar9999@yahoo.com',
      label: 'Email',
    },
  ];

  const quickLinks = [
    { label: 'Home', path: '/' },
    { label: 'About', path: '/about' },
    { label: 'Projects', path: '/projects' },
    { label: 'Contact', path: '/contact' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <footer className="footer-wrapper">
      <div className="background-blobs">
        <div className="blob blob-1"></div>
        <div className="blob blob-2"></div>
        <div className="blob blob-3"></div>
      </div>
      <Container className="footer-content">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="footer-grid"
        >
          <motion.div variants={itemVariants} className="footer-section">
            <h3 className="footer-title">Pappu Kumar</h3>
            <p className="footer-description">
              Full Stack Developer crafting innovative solutions with modern
              technologies. Passionate about creating exceptional user
              experiences.
            </p>
            <div className="footer-socials">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={index}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="social-link"
                  aria-label={link.label}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="footer-section">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <motion.div whileHover={{ x: 5 }}>
                    <Link to={link.path} className="footer-link">
                      <ExternalLink size={16} className="link-icon" />
                      {link.label}
                    </Link>
                  </motion.div>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants} className="footer-section">
            <h4 className="footer-heading">Contact Info</h4>
            <div className="footer-contact">
              <div>
                <MapPin size={20} className="icon" /> New Delhi, India
              </div>
              <div>
                <Phone size={20} className="icon" /> +91 9504860538
              </div>
              <div>
                <Mail size={20} className="icon" /> pappukumar9999@yahoo.com
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="footer-section">
            <h4 className="footer-heading">Stay Updated</h4>
            <p className="footer-note">
              Subscribe to get updates about new projects and opportunities.
            </p>
            <Form>
              <Form.Group controlId="emailInput">
                <Form.Control
                  type="email"
                  placeholder="Enter your email"
                  className="email-input"
                />
              </Form.Group>
              <motion.div
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button
                  variant="primary"
                  type="submit"
                  className="subscribe-button"
                >
                  <Send size={16} /> <span>Subscribe</span>
                </Button>
              </motion.div>
            </Form>
          </motion.div>
        </motion.div>

        <hr className="footer-divider" />

        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="footer-bottom"
        >
          <p className="footer-credit">
            {/* Made with <Heart size={14} className="heart-icon" /> by Pappu Kumar */}
          </p>
          <p className="footer-copy">
            © 2024 Pappu Kumar. All rights reserved.
          </p>
        </motion.div>
      </Container>

      <motion.button
        onClick={scrollToTop}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="scroll-top"
        aria-label="Scroll to top"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1 }}
      >
        <ArrowUp size={20} />
      </motion.button>
    </footer>
  );
};

export default Footer;
