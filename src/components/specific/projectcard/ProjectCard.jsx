import React from 'react';
import { Link } from 'react-router-dom';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt } from 'react-icons/fa';
import './ProjectCard.scss';

const ProjectCard = ({ imgName, title, description, duration, link }) => {
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
          <img src={imgName} alt={title} className="card-image" />
          <div className="card-content">
            <h3 className="card-title">{title}</h3>
            <p className="duration">
              <strong>Duration:</strong> {duration}
            </p>
            <p className="card-description">{description}</p>
            <Link to={`/projects/${link}`} className="card-link">
              Explore <FaExternalLinkAlt size={12} />
            </Link>
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

export default ProjectCard;
