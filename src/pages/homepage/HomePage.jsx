import React from 'react';
import Navigation from '../../components/layout/navbar/Navbar';
import Banner from '../../components/specific/banner/Banner';
import CarouselComponent from '../../components/layout/carousel/Carousel';
import WideProjectsSection from '../../components/layout/wideprojectssection/WideProjectsSection';
import Footer from '../../components/layout/footer/Footer';
import ClientsSection from '../../components/layout/clientsection/ClientsSection';
import Testimonials from '../../components/layout/testimonials/Testimonials';
import Hero from '../../components/layout/hero/Hero';
import '../../styles/global.scss';
import './homepage.scss';

const HomePage = () => {
  return (
    <div>
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

      <div className="homepage-about">
        <h2>About Me</h2>
        <div className="homepage-about-highlight fade-in-up staggered-delay-1">
          <h2>Our Commitment</h2>
          <p>
            At Swpris Facilities, we pride ourselves on being a dependable
            provider of skilled professionals and facility services...
          </p>
        </div>
      </div>

      <ClientsSection />
      <Testimonials />
      <Footer />
    </div>
  );
};

export default HomePage;
