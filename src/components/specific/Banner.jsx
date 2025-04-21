import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
// import { ToastContainer } from "react-toastify";
import bannerData from "../../data/bannerData.json";
import im1 from "../../assets/images/im1.jpg";
import im2 from "../../assets/images/im2.jpg";
import im3 from "../../assets/images/im3.jpg";
import im4 from "../../assets/images/im4.jpg";
import "../../styles/global.scss";

// Static map for image lookup
const imageMap = {
  "im1.jpg": im1,
  "im2.jpg": im2,
  "im3.jpg": im3,
  "im4.jpg": im4,
};

const getBannerData = (key) => bannerData[key] || "";

const Banner = () => {
  return (
      <section className="banner-area">
        <Container>
          <Row>
            {bannerData.map((banner, i) => {
              const fileName = banner.img.split("/").pop();
              const imageSrc = imageMap[fileName] || im1;

              return (
                <Col key={i} lg={3} md={6} sm={6} xs={12} className="mb-4">
                  <div className="single-banner d-flex align-items-start banner-shadow-hover">
                    <div className="banner-img me-3">
                      <a href="#">
                        <Image
                          src={imageSrc}
                          alt={`banner-${i}`}
                          fluid
                        />
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
