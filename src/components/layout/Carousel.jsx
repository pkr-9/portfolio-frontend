import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "../../styles/global.scss"
// Import images from assets
import c1 from "../../assets/images/imggg.jpg"
import c2 from "../../assets/images/new2.jpg";
import c3 from "../../assets/images/im2.jpg";

const images = [c1, c2, c3];

const CarouselComponent = () => {
    return (
        <Carousel fade interval={3000}>
        {images.map((img, i) => (
          <Carousel.Item key={i}>
            <img src={img} alt={`Slide ${i + 1}`} className="d-block w-100" />
          </Carousel.Item>
        ))}
      </Carousel>
    );
    };
export default CarouselComponent;