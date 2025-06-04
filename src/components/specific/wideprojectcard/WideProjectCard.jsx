import React from 'react';
import { Button } from 'react-bootstrap';
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
      className="dimensional-card"
      whileHover="hover"
      initial="rest"
      animate="rest"
      variants={{
        rest: { scale: 1 },
        hover: {
          scale: 1.04,
          rotateX: 2,
          rotateY: -2,
          transition: { type: 'spring', stiffness: 100, damping: 12 },
        },
      }}
    >
      <div
        className="background-image"
        style={{ backgroundImage: `url(${imgSrc})` }}
      />

      <motion.div
        className="content"
        variants={{
          rest: {},
          hover: { transition: { staggerChildren: 0.15 } },
        }}
      >
        <motion.h3
          className="title"
          variants={{
            rest: { y: 0 },
            hover: { y: -10 },
          }}
        >
          {title}
        </motion.h3>

        <motion.div
          className="details"
          variants={{
            rest: { opacity: 0, y: 20 },
            hover: { opacity: 1, y: 0 },
          }}
        >
          <p>{description}</p>
          <Button
            variant="outline-info"
            href={link}
            target="_blank"
            rel="noopener noreferrer"
          >
            Explore →
          </Button>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default WideProjectCard;
