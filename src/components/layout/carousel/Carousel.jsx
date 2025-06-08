import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import c1 from '/assets/images/carousel_1.png';
import c2 from '/assets/images/carousel_1.png';
import c3 from '/assets/images/carousel_1.png';
import '../../../styles/global.scss';
import './Carousel.scss';

const images = [c1, c2, c3];

const CarouselComponent = () => {
  return (
    <Carousel fade interval={3000} pause="hover">
      {images.map((img, i) => (
        <Carousel.Item key={i}>
          <div className="carousel-image-wrapper">
            <img src={img} alt={`Slide ${i + 1}`} className="carousel-img" />
          </div>
        </Carousel.Item>
      ))}
    </Carousel>
  );
};
export default CarouselComponent;
