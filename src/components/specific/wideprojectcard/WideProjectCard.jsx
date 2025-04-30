import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';
import { motion } from 'framer-motion';
import im1 from '../../../assets/images/im1.jpg';
import im2 from '../../../assets/images/im2.jpg';
import im3 from '../../../assets/images/im3.jpg';
import im4 from '../../../assets/images/im4.jpg';
import './WideProjectCard.scss';

const imageMap = {
  'im1.jpg': im1,
  'im2.jpg': im2,
  'im3.jpg': im3,
  'im4.jpg': im4,
};

const WideProjectCard = ({ imgName, title, description, link }) => {
  const imgSrc = imageMap[imgName] || im1;

  return (
    <motion.div
      className="wide-project-card-wrapper"
      initial={{ opacity: 0, x: 60 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      <Row className="wide-project-card align-items-center g-0 shadow-lg">
        <Col md={5} className="image-container">
          <img src={imgSrc} alt={title} className="img-fluid" />
        </Col>
        <Col md={7} className="text-container px-4 py-3">
          <h3>{title}</h3>
          <p>{description}</p>
          <Button
            variant="outline-info"
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            Explore →
          </Button>
        </Col>
      </Row>
    </motion.div>
  );
};

export default WideProjectCard;
