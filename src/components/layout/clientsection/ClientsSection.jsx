import React, { useState } from 'react';
import '../../../styles/global.scss';
import './ClientsSection.scss';

const initialClients = [
  'Santtukaram International School',
  'MJ Hospital',
  'OM Packaging',
  'Yashhtej Solvent',
  'Galaxy Mall',
  'Vishweshwarayya Mahavidyalaya',
];

const extraClients = [
  'Patil Hospital',
  'Akashay Hotel',
  'Snehshree Realty',
  'Bharat Hotel',
];

const ClientsSection = () => {
  const [showMore, setShowMore] = useState(false);
  return (
    <section id="clients" className="blog">
      <h2>Our Clients</h2>
      <div className="blog-grid">
        {initialClients.map((c, i) => (
          <div className="blog-card fade-in-up staggered-delay-{i+1}" key={i}>
            <h3>{c}</h3>
          </div>
        ))}
        {showMore &&
          extraClients.map((c, i) => (
            <div className="blog-card fade-in-up staggered-delay-{i+1}" key={i}>
              <h3>{c}</h3>
            </div>
          ))}
      </div>
      <button
        className="cta-button mt-3 show-more-btn"
        onClick={() => setShowMore((prev) => !prev)}
      >
        {showMore ? 'Show Less' : 'View More'}
      </button>
    </section>
  );
};

export default ClientsSection;
