// import React from 'react';
// import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import './WideProjectCard.scss';

const WideProjectCard = ({
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
        style={{ backgroundImage: `url(${imgName})` }}
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
          className="details show-on-mobile"
          variants={{
            rest: { opacity: 0, y: 20 },
            hover: { opacity: 1, y: 0 },
          }}
        >
          <p className="major-tech-stack">
            <strong>{majorTechStack.join(', ')}</strong>
          </p>
          <p>{description}</p>

          <div className="project-buttons">
            {repo && (
              <a
                href={repo}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-repo"
              >
                GitHub Repo
              </a>
            )}
            {live && (
              <a
                href={live}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-live"
              >
                View Live
              </a>
            )}
            {documentation && (
              <a
                href={documentation}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-doc"
              >
                View Docs
              </a>
            )}
          </div>
          {/* <Link to={`/projects/${link}`} className="explore-button">
            Explore →
          </Link> */}
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default WideProjectCard;
