import '../../../styles/global.scss';
import './SocialMedia.scss';
import React from 'react';
import { Container } from 'react-bootstrap';
import { motion } from 'framer-motion';
import {
  FaLinkedin,
  FaGithub,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

const socialLinks = [
  {
    icon: <FaLinkedin />,
    url: 'https://www.linkedin.com/in/yourprofile',
    name: 'LinkedIn',
  },
  { icon: <FaGithub />, url: 'https://github.com/yourprofile', name: 'GitHub' },
  {
    icon: <SiLeetcode />,
    url: 'https://leetcode.com/yourprofile',
    name: 'LeetCode',
  },
  {
    icon: <FaTwitter />,
    url: 'https://twitter.com/yourprofile',
    name: 'Twitter',
  },
  {
    icon: <FaInstagram />,
    url: 'https://instagram.com/yourprofile',
    name: 'Instagram',
  },
  {
    icon: <FaYoutube />,
    url: 'https://youtube.com/yourchannel',
    name: 'YouTube',
  },
];

const SocialMedia = () => {
  const totalIcons = socialLinks.length;
  const radius = 122;

  return (
    <section id="social-media" className="social-media-section">
      <Container className="d-flex flex-column justify-content-center align-items-center">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Connect with Me */}
        </motion.h2>

        <motion.div
          className="circle-wrapper"
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 50, ease: 'linear' }}
          whileHover={{ rotate: 0, transition: { duration: 0.6 } }}
        >
          <div className="outer-glass-circle"></div>
          <div className="inner-glass-circle"></div>

          {/* Icons */}
          <div className="icons-container">
            {socialLinks.map((link, index) => {
              const angle = (index / totalIcons) * 2 * Math.PI;
              const x = radius * Math.cos(angle);
              const y = radius * Math.sin(angle);

              return (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon"
                  title={link.name}
                  style={{
                    top: `calc(50% + ${y}px)`,
                    left: `calc(50% + ${x}px)`,
                  }}
                >
                  {link.icon}
                </a>
              );
            })}
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default SocialMedia;
