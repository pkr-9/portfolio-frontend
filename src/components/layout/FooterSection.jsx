import React from "react";
import { Container } from "react-bootstrap";
import "./Footer.css"; // optional if separated

const Footer = () => {
  return (
    <footer className="footer">
      <Container className="text-center">
        <p>&copy; {new Date().getFullYear()} Swpris Facilities. All rights reserved.</p>
        <p>Website developed by Pappu Kumar</p>
      </Container>
    </footer>
  );
};

export default Footer;
