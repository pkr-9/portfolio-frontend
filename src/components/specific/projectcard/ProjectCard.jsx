// import React from 'react';
// import { Link } from 'react-router-dom';
// import { FaExternalLinkAlt } from 'react-icons/fa';
import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';
import './ProjectCard.scss';

const ProjectCard = ({
  title,
  description,
  imgName,
  majorTechStack,
  repo,
  live,
  documentation,
}) => {
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
            <p className="tech-stack">
              <strong>{majorTechStack.join(', ')}</strong>
            </p>
            <p className="card-description">{description}</p>
            {/* <Link to={`/projects/${link}`} className="card-link">
              Explore <FaExternalLinkAlt size={12} />
            </Link> */}
            <div className="project-buttons">
              <a
                href={repo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-repo"
              >
                GitHub Repo
              </a>
              <a
                href={live}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-live"
              >
                View Live
              </a>
              <a
                href={documentation}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-doc"
              >
                View Docs
              </a>
            </div>
          </div>
        </div>
      </Tilt>
    </motion.div>
  );
};

export default ProjectCard;
