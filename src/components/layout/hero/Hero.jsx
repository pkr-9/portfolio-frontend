import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import '../../../styles/global.scss';
import './Hero.scss';

const Hero = () => {
  const text = 'Turning Ideas into Scalable Web Solutions.';
  const letters = text.split('');
  useEffect(() => {
    const container = document.querySelector('.moving-circles');
    if (container) {
      for (let i = 0; i < 20; i++) {
        const circle = document.createElement('div');
        circle.classList.add('circle');
        circle.style.left = `${Math.random() * 100}%`;
        circle.style.animationDuration = `${4 + Math.random() * 3}s`;
        const size = 10 + Math.random() * 20;
        circle.style.width = `${size}px`;
        circle.style.height = `${size}px`;
        container.appendChild(circle);
      }
    }
  }, []);

  return (
    <section id="home" className="hero">
      {/* Animated gradient background */}
      <div className="animated-gradient" />

      {/* Moving circles */}
      <div className="moving-circles" />

      {/* Main content */}
      <div className="hero-content">
        <motion.h1
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="hero-title"
        >
          {letters.map((letter, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: index * 0.05 }}
            >
              {letter}
            </motion.span>
          ))}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="hero-subtitle"
        >
          Pappu Kumar | Full-Stack Developer
        </motion.p>

        <motion.a
          href="#about"
          className="cta-button"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Learn More
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;
