import { Carousel, Container } from "react-bootstrap";
import React, { useState } from "react";
import "./carouselSilder.css";

function CarouselSlider() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Container>
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        className="mt-5 mb-5"
      >
        <Carousel.Item>
          <img
            className=""
            src="https://user-images.githubusercontent.com/70451928/184708087-f51ad8f7-fe53-4552-8fc0-d4e7cc0f1c2c.PNG"
            alt="First slide"
          />
          {/* <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption> */}
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block"
            src="https://user-images.githubusercontent.com/70451928/184708087-f51ad8f7-fe53-4552-8fc0-d4e7cc0f1c2c.PNG"
            alt="Second slide"
          />

          {/* <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption> */}
        </Carousel.Item>

        <Carousel.Item>
          <img
            className="d-block "
            src="https://user-images.githubusercontent.com/70451928/184708087-f51ad8f7-fe53-4552-8fc0-d4e7cc0f1c2c.PNG"
            alt="Third slide"
          />

          {/* <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption> */}
        </Carousel.Item>
      </Carousel>
    </Container>
  );
}

export default CarouselSlider;
