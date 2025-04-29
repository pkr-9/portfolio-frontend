import React, { useRef, useEffect } from 'react';
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
      <Banner />
      <CarouselComponent />
      <div className="homepage-projects fade-in-up staggered-delay-1">
        <h2>Latest Project</h2>
        <WideProjectsSection />
      </div>

      <div className="homepage-strengths">
        <h2>Core Strengths</h2>
        <div className="homepage-strength-highlight">
          <h2>Springboot React Bootstrap</h2>
          <p>
            We specialize in skilled/semi-skilled labor for factories, events,
            hospitals, and institutions.
          </p>
        </div>
      </div>

      <section className="homepage-about">
        <h2 className="neon-title">
          <span>A</span>
          <span>b</span>
          <span>o</span>
          <span>u</span>
          <span>t</span>
          <span>M</span>
          <span>e</span>
        </h2>

        <div
          className="homepage-about-card fade-in-up staggered-delay-1"
          ref={cardRef}
        >
          <div className="particles">
            {[...Array(PARTICLE_COUNT)].map((_, i) => (
              <div key={i} className="particle"></div>
            ))}
          </div>
          <div className="dynamic-gradient"></div>
          <div className="content">
            <h3>Creative & Committed</h3>
            <p>
              I'm passionate about delivering robust backend architecture, clean
              code, and smooth user experiences. I blend logic with creativity,
              backed by a strong foundation in Java, Spring Boot, and
              problem-solving.
            </p>
          </div>
        </div>
      </section>

      <div className="strength-section">
        <StrengthCard />
      </div>
      <ClientsSection />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default HomePage;
