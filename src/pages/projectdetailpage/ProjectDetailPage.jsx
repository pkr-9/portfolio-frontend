// ProjectDetailPage.jsx
import React from 'react';
import Navigation from '../../components/layout/navbar/Navbar';
import Footer from '../../components/layout/footer/Footer';
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
    duration,
    img,
    main_img,
    live,
    sectionTitles = {},
    ...fields
  } = project;

  const renderSection = (key, content) => {
    if (!content || (Array.isArray(content) && content.length === 0))
      return null;

    return (
      <motion.section className="section" key={key}>
        <h2>{sectionTitles[key] || key.replace(/([A-Z])/g, ' $1')}</h2>
        {Array.isArray(content) ? (
          <ul>
            {content.map((item, i) => (
              <li key={i}>
                {typeof item === 'string' ? item : JSON.stringify(item)}
              </li>
            ))}
          </ul>
        ) : typeof content === 'object' ? (
          <ul>
            {Object.entries(content)
              .filter(([_, value]) => value)
              .map(([key, _]) => (
                <li key={key}>{key.replace(/([A-Z])/g, ' $1')}</li>
              ))}
          </ul>
        ) : (
          <p>{content}</p>
        )}
      </motion.section>
    );
  };

  const excludedKeys = [
    'id',
    'slug',
    'shortDescription',
    'repo',
    'gallery',
    'team',
    'ebookSupport',
  ];

  return (
    <>
      <Navigation />
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
          <strong>Duration:</strong> {duration}
        </p>

        <motion.p className="description">{fullDescription}</motion.p>

        {Object.entries(fields)
          .filter(([key]) => !excludedKeys.includes(key))
          .map(([key, value]) => renderSection(key, value))}

        {project.ebookSupport && (
          <motion.p className="highlight">E-book support: ✅ Enabled</motion.p>
        )}

        {project.team?.length > 0 && (
          <motion.section className="section">
            <h2>{sectionTitles.team || 'Team'}</h2>
            <ul className="team">
              {project.team.map((member, i) => (
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
          <a href={live} target="_blank" rel="noreferrer">
            Live Demo
          </a>
        </motion.div>
      </motion.div>
      <Footer />
    </>
  );
};

export default ProjectDetailPage;
