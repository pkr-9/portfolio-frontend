import React, { useEffect, useState } from 'react';
import {
  Container,
  Navbar,
  Nav,
  Form,
  FormControl,
  Button,
} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../../styles/global.scss';
import './Navbar.scss';

const Navigation = () => {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header className="custom-header">
      <Navbar
        expand="lg"
        className={`nav2 ${scrolled ? 'scrolled' : ''}`}
        fixed="top"
      >
        <Container
          fluid
          className="d-flex justify-content-between align-items-center px-3"
        >
          <Navbar.Brand
            as={Link}
            to="/"
            className="d-flex align-items-center gap-2"
          >
            <div className="logo-img" />
            <span className="company-name">My Portfolio</span>
          </Navbar.Brand>

          <Navbar.Toggle
            aria-controls="responsive-navbar-nav"
            className="border-0"
          />

          <Navbar.Collapse
            id="responsive-navbar-nav"
            className="justify-content-end align-items-center gap-3"
          >
            <Nav className="nav-links d-flex align-items-center gap-3">
              <Nav.Link as={Link} to="/">
                Home
              </Nav.Link>
              <Nav.Link as={Link} to="/about">
                About
              </Nav.Link>
              <Nav.Link as={Link} to="/projects">
                Projects
              </Nav.Link>
              <Nav.Link as={Link} to="/contact">
                Contact
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};

export default Navigation;
