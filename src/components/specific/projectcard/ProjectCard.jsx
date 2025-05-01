import React from 'react';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';
import './ProjectCard.scss';

import im1 from '../../../assets/images/im1.jpg';
import im2 from '../../../assets/images/im2.jpg';
import im3 from '../../../assets/images/im3.jpg';
import im4 from '../../../assets/images/im4.jpg';

const imageMap = {
  'im1.jpg': im1,
  'im2.jpg': im2,
  'im3.jpg': im3,
  'im4.jpg': im4,
};

const ProjectCard = ({ imgName, title, description, link }) => {
  const imgSrc = imageMap[imgName] || im1;

  return (
    <motion.div
      className="custom-project-card"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      viewport={{ once: true }}
    >
      <Tilt
        glareEnable
        glareMaxOpacity={0.25}
        scale={1.01}
        transitionSpeed={800}
        className="card-tilt"
      >
        <div className="card-inner">
          <img src={imgSrc} alt={title} className="card-image" />
          <div className="card-content">
            <h3 className="card-title">{title}</h3>
            <p className="card-description">{description}</p>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="card-link"
            >
              Explore <FaExternalLinkAlt size={12} />
            </a>
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

export default ProjectCard;
