import React from 'react';
import '../../../styles/global.scss';
import './Testimonials.scss';

const testimonials = [
  {
    text: 'Swpris has transformed our hygiene standards.',
    author: 'Santtukaram International School',
  },
  {
    text: 'Prompt labor supply and excellent support.',
    author: 'MJ Hospital',
  },
  {
    text: 'They handle security and cleaning professionally.',
    author: 'Galaxy Mall',
  },
];

const Testimonials = () => (
  <section id="testimonials">
    <h2>Testimonials</h2>
    {testimonials.map((t, i) => (
      <blockquote className="fade-in-up staggered-delay-{i+1}" key={i}>
        <p>"{t.text}"</p>
        <footer>- {t.author}</footer>
      </blockquote>
    ))}
  </section>
);

export default Testimonials;
