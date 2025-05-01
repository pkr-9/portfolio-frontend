import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navigation from '../../components/layout/navbar/Navbar';
import Banner from '../../components/specific/banner/Banner';
import CarouselComponent from '../../components/layout/carousel/Carousel';
import WideProjectsSection from '../../components/layout/wideprojectssection/WideProjectsSection';
import Footer from '../../components/layout/footer/Footer';
import ClientsSection from '../../components/layout/clientsection/ClientsSection';
import Testimonials from '../../components/layout/testimonials/Testimonials';
import Hero from '../../components/layout/hero/Hero';
import StrengthCard from '../../components/specific/strengthcard/StrengthCard';

import '../../styles/global.scss';
import './HomePage.scss';

const PARTICLE_COUNT = 40;

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' },
  }),
};

const HomePage = () => {
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;
    let frame;
    const handleMouseMove = (e) => {
      if (frame) cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        card.style.setProperty('--x', `${x}px`);
        card.style.setProperty('--y', `${y}px`);
      });
    };
    if (card) card.addEventListener('mousemove', handleMouseMove);
    return () => {
      if (card) card.removeEventListener('mousemove', handleMouseMove);
      if (frame) cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div className="homepage-wrapper">
      <Navigation />
      <Hero />

      <motion.div variants={fadeUp} initial="hidden" animate="visible">
        <Banner />
      </motion.div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={1}
      >
        <CarouselComponent />
      </motion.div>

      <motion.div
        className="homepage-projects"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={2}
      >
        {/* <h2>Latest Project</h2> */}
        <WideProjectsSection />
      </motion.div>

      <motion.div
        className="homepage-strengths"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={3}
      >
        <h2>Core Strengths</h2>
        <div className="homepage-strength-highlight">
          <h2>Spring Boot React Bootstrap</h2>
          <p>
            We specialize in skilled/semi-skilled labor for factories, events,
            hospitals, and institutions.
          </p>
        </div>
      </motion.div>

      <motion.section
        className="homepage-about"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2 className="neon-title">
          {'AboutMe'.split('').map((char, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
            >
              {char}
            </motion.span>
          ))}
        </h2>

        <motion.div
          className="homepage-about-card"
          ref={cardRef}
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="particles">
            {[...Array(PARTICLE_COUNT)].map((_, i) => (
              <div key={i} className="particle" />
            ))}
          </div>
          <div className="dynamic-gradient" />
          <div className="content">
            <h3>Creative & Committed</h3>
            <p>
              I'm passionate about delivering robust backend architecture, clean
              code, and smooth user experiences. I blend logic with creativity,
              backed by a strong foundation in Java, Spring Boot, and
              problem-solving.
            </p>
          </div>
        </motion.div>
      </motion.section>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={4}
      >
        <div className="strength-section">
          <StrengthCard />
        </div>
      </motion.div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={5}
      >
        <ClientsSection />
      </motion.div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        custom={6}
      >
        <Testimonials />
      </motion.div>

      <Footer />
    </div>
  );
};

export default HomePage;
