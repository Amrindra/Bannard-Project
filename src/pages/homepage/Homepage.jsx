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
            <Col>
              <CardProduct />
            </Col>
            <Col>
              <CardProduct />
            </Col>
            <Col>
              <CardProduct />
            </Col>
            <Col>
              <CardProduct />
            </Col>
          </Row>
          <Row>
            <Col>
              <CardProduct />
            </Col>
            <Col>
              <Col>
                <CardProduct />
              </Col>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Homepage;
