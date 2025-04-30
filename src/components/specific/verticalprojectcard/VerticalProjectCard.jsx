import React from 'react';
import './VerticalProjectCard.scss';
import im1 from '../../../assets/images/im1.jpg';
import im2 from '../../../assets/images/im2.jpg';
import im3 from '../../../assets/images/im3.jpg';
import im4 from '../../../assets/images/im4.jpg';

const imageMap = {
  'im1.jpg': im1,
  'im2.jpg': im2,
  'im3.jpg': im3,
  'im4.jpg': im4,
};

const VerticalProjectCard = ({ imgName, title, description, link }) => {
  const imgSrc = imageMap[imgName] || im1;

  return (
    <div className="project-card-wrapper">
      <div className="project-card-hover">
        <div className="img-container">
          <img src={imgSrc} alt={title} />
        </div>
        <div className="text-container">
          <h3>{title}</h3>
          <p>{description}</p>
          <a href={link} target="_blank" rel="noopener noreferrer">
            Explore →
          </a>
        </div>
      </div>
    </div>
  );
};

export default VerticalProjectCard;
