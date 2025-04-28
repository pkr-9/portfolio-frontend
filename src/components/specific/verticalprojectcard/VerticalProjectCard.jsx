import React from 'react';
import ProjectCard from '../projectcard/ProjectCard';
import '../../../styles/global.scss';
import './VerticalProjectCard.scss';

const VerticalProjectCard = (props) => (
  <ProjectCard
    {...props}
    className="vertical-project-card"
    imgStyle={{ height: '220px', objectFit: 'cover' }}
  />
);

export default VerticalProjectCard;
