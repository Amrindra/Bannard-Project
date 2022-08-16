import { Carousel, Col, Container, Row } from "react-bootstrap";
import Banner from "../../components/banner/Banner";
import Feature from "../../components/feature/Feature";
import CardProduct from "../../components/cardProduct/CardProduct";
import CarouselSlider from "../../components/carouselSlider/CarouselSlider";

import "./Homepage.css";

const Homepage = () => {
  return (
    <div className="homepage">
      <Banner />
      <Feature />
      <CarouselSlider />

      <section className="card_sections">
        <Container>
          <Row>
            <Col sm={12} md={6} lg={4} xl={4}>
              <CardProduct />
            </Col>
            <Col sm={12} md={6} lg={4} xl={4}>
              <CardProduct />
            </Col>
            <Col sm={12} md={6} lg={4} xl={4}>
              <CardProduct />
            </Col>
            <Col sm={12} md={6} lg={4} xl={4}>
              <CardProduct />
            </Col>
            <Col sm={12} md={6} lg={4} xl={4}>
              <CardProduct />
            </Col>
            <Col sm={12} md={6} lg={4} xl={4}>
              <CardProduct />
            </Col>
            <Col sm={12} md={6} lg={4} xl={4}>
              <CardProduct />
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Homepage;
