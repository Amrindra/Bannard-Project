import { Carousel, Col, Container, Row } from "react-bootstrap";
import Banner from "../../components/banner/Banner";
import CardProduct from "../../components/cardProduct/CardProduct";
import CarouselSlider from "../../components/carouselSlider/CarouselSlider";

import "./Homepage.css";

const Homepage = () => {
  return (
    <div className="homepage">
      <Banner />
      <CarouselSlider />

      <Container>
        <section className="card_sections">
          <Row>
            <Col>
              <CardProduct />
            </Col>
          </Row>
          <Row>
            <Col>
              <CardProduct />
            </Col>
          </Row>
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
        </section>
      </Container>
    </div>
  );
};

export default Homepage;
