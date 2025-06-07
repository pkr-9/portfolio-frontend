import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import projects from '../../data/projects.json';
import './ProjectDetailPage.scss';

const ProjectDetailPage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return (
      <div className="not-found">
        <p>Project not found.</p>
        <button onClick={() => navigate('/')}>Go Home</button>
      </div>
    );
  }

  const {
    title,
    fullDescription,
    features,
    techStack,
    role,
    duration,
    img,
    main_img,
    gallery,
    repo,
    live,
    architecture,
    security,
    scalability,
    community,
    paymentFeatures,
    ebookSupport,
    team,
  } = project;

  return (
    <motion.div
      className="project-detail"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <motion.img
        src={main_img || img}
        alt={title}
        className="detail-image"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      />

      <motion.h1 className="title">{title}</motion.h1>
      <p className="meta">
        <strong>Role:</strong> {role}
      </p>
      <p className="meta">
        <strong>Duration:</strong> {duration}
      </p>
      <p className="meta">
        <strong>Architecture:</strong> {architecture}
      </p>

      <motion.p className="description">{fullDescription}</motion.p>

      <motion.section className="section">
        <h2>Features</h2>
        <ul>
          {features.map((f, i) => (
            <li key={i}>{f}</li>
          ))}
        </ul>
      </motion.section>

      <motion.section className="section">
        <h2>Tech Stack</h2>
        <div className="tech-stack">{techStack.join(', ')}</div>
      </motion.section>
      {/* {gallery?.length > 0 && (
        <motion.section className="section">
          <h2>Gallery</h2>
          <div className="gallery-carousel">
            <div className="carousel-track">
              {gallery.map((src, i) => (
                <div className="carousel-item" key={i}>
                  <img
                    src={src}
                    onError={(e) => {
                      e.target.src = '/assets/images/image.png'; // fallback image
                    }}
                    alt={`screenshot-${i + 1}`}
                  />
                </div>
              ))}
            </div>
          </div>
        </motion.section>
      )} */}

      {security?.length > 0 && (
        <motion.section className="section">
          <h2>Security Features</h2>
          <ul>
            {security.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </motion.section>
      )}

      {scalability && (
        <motion.section className="section">
          <h2>Scalability</h2>
          <p>{scalability}</p>
        </motion.section>
      )}

      {paymentFeatures?.length > 0 && (
        <motion.section className="section">
          <h2>Payment Options</h2>
          <ul>
            {paymentFeatures.map((p, i) => (
              <li key={i}>{p}</li>
            ))}
          </ul>
        </motion.section>
      )}

      {ebookSupport && (
        <motion.p className="highlight">E-book support: ✅ Enabled</motion.p>
      )}

      {community && (
        <motion.section className="section">
          <h2>Community Features</h2>
          <ul>
            {Object.entries(community).map(([key, value]) =>
              value ? <li key={key}>{key.replace(/([A-Z])/g, ' $1')}</li> : null
            )}
          </ul>
        </motion.section>
      )}

      {team?.length > 0 && (
        <motion.section className="section">
          <h2>Team</h2>
          <ul className="team">
            {team.map((member, i) => (
              <li key={i}>
                <span className="name">{member.name}</span> – {member.role}
                {member.github && (
                  <a href={member.github} target="_blank" rel="noreferrer">
                    {' '}
                    GitHub
                  </a>
                )}
                {member.linkedin && (
                  <a href={member.linkedin} target="_blank" rel="noreferrer">
                    {' '}
                    LinkedIn
                  </a>
                )}
              </li>
            ))}
          </ul>
        </motion.section>
      )}

      <motion.div className="links">
        <a href={repo} target="_blank" rel="noreferrer">
          View Code
        </a>
        <a href={live} target="_blank" rel="noreferrer">
          Live Demo
        </a>
      </motion.div>
    </motion.div>
  );
};

export default ProjectDetailPage;
