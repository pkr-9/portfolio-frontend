import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navigation from '../../components/layout/navbar/Navbar';
import Banner from '../../components/specific/banner/Banner';
import CarouselComponent from '../../components/layout/carousel/Carousel';
import WideProjectsSection from '../../components/layout/wideprojectssection/WideProjectsSection';
import Footer from '../../components/layout/footer/Footer';
import Hero from '../../components/layout/hero/Hero';
import StrengthCard from '../../components/specific/strengthcard/StrengthCard';
import { useContext } from 'react';
import { useTheme } from '../../contexts/ThemeContext';
import '../../styles/global.scss';
import './HomePage.scss';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.2, duration: 0.6, ease: 'easeOut' },
  }),
};

const HomePage = () => {
  const { theme } = useTheme();
  return (
    <div className={`homepage-wrapper ${theme}`}>
      <Navigation />
      <div className="min-h-screen">
        <Hero />
      </div>

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
        <WideProjectsSection />
      </motion.div>

      <motion.section
        className="homepage-about"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <h2>About Me</h2>

        <motion.div className="homepage-about-card">
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

      <Footer />
    </div>
  );
};

export default HomePage;
