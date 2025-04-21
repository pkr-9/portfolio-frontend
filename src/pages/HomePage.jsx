import React from 'react';
import Navigation from '../components/layout/Navbar';
import Banner from '../components/specific/Banner';
import CarouselComponent from '../components/layout/Carousel';
import WideProjectsSection from '../components/layout/WideProjectsSection';
import Footer from '../components/layout/Footer';
import '../styles/global.scss';
import ClientsSection from '../components/layout/ClientsSection';
import Testimonials from '../components/layout/Testimonials';
import Hero from '../components/layout/Hero';

const HomePage = () => {
  return (
    <div>
      <Navigation />
      <Hero />
      <Banner />
      <CarouselComponent />
      <div className="homepage-projects">
        <h2>Our Projects</h2>
        <WideProjectsSection />
      </div>
      <div className="about">
        <h2>About Us</h2>
        <div className="about-highlight">
          <h2>Our Commitment</h2>
          <p>
            At Swpris Facilities, we pride ourselves on being a dependable
            provider of skilled professionals and facility services...
          </p>
        </div>
      </div>
      <div className="services">
        <h2>Our Services</h2>
        <div className="labor-highlight">
          <h2>Labor Supply – Our Core Strength</h2>
          <p>
            We specialize in skilled/semi-skilled labor for factories, events,
            hospitals, and institutions.
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
