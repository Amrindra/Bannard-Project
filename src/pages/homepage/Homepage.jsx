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
      <Container>
        <Feature />
      </Container>
      <CarouselSlider />

      <section className="card_sections"></section>
    </div>
  );
};

export default Homepage;
