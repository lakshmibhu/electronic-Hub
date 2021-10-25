import React from "react";

import { Col, Row, Container, Carousel } from "react-bootstrap";

class Deals extends React.Component {
  render() {
    return (
      <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://5.imimg.com/data5/HN/NI/MY-22129772/samsung-mobile-charger-500x500.jpg"
            alt="Samsunge Charger"
            width="500px"
            height="400px"
          />
          <Carousel.Caption>
            <h2>Samsunge Charger</h2>
            <p>Best offers</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://5.imimg.com/data5/HM/CT/MY-54168454/lenovo-laptops-500x500.jpg"
            alt="Laptops"
            width="500px"
            height="400px"
          />
          <Carousel.Caption>
            <h3>Lenova Laptops</h3>
            <p>Best offers</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="https://5.imimg.com/data5/FR/HQ/LM/SELLER-29542680/980x-500x500.jpg"
            alt="Best offers"
            width="500px"
            height="400px"
          />
          <Carousel.Caption>
            <h3>Sony Speakers</h3>
            <p>Best offers</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    );
  }
}
export default Deals;
