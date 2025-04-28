import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import bannerData from '../../../data/bannerData.json';
import springIcon from '../../../assets/images/spring_icon.png';
import reactIcon from '../../../assets/images/React_icon.png';
import bootstrapIcon from '../../../assets/images/bootstrap_icon.png';
import gitIcon from '../../../assets/images/git_icon.png';
import '../../../styles/global.scss';
import './Banner.scss';

// Static map for image lookup
const imageMap = {
  'spring_icon.png': springIcon,
  'React_icon.png': reactIcon,
  'bootstrap_icon.png': bootstrapIcon,
  'git_icon.png': gitIcon,
};

const Banner = () => {
  return (
    <section className="banner-area">
      <Container>
        <Row>
          {bannerData.map((banner, i) => {
            const fileName = banner.img.split('/').pop();
            const imageSrc = imageMap[fileName] || springIcon; // Fallback to springIcon if not found

            return (
              <Col
                key={i}
                lg={3}
                md={6}
                sm={6}
                xs={12}
                className={`mb-4 fade-in-up staggered-delay-${i + 1}`}
              >
                <div className="single-banner d-flex align-items-start banner-shadow-hover">
                  <div className="banner-img me-3">
                    <a href="#">
                      <Image src={imageSrc} alt={`banner-${i}`} fluid />
                    </a>
                  </div>
                  <div className="banner-text">
                    <h4>{banner.title}</h4>
                    <p>{banner.desc}</p>
                  </div>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </section>
  );
};

export default Banner;
