import React from 'react';
import ProjectCard from '../projectcard/ProjectCard';
import '../../../styles/global.scss';
import './WideProjectCard.scss';

const WideProjectCard = (props) => (
  <ProjectCard
    {...props}
    className="wide-project-card"
    imgStyle={{ height: '280px', objectFit: 'cover' }}
    bodyStyle={{ textAlign: 'center' }}
  />
);

export default WideProjectCard;
