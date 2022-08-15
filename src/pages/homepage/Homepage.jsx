import { Carousel, Container } from "react-bootstrap";
import Banner from "../../components/banner/Banner";
import CardProduct from "../../components/cardProduct/CardProduct";
import CarouselSlider from "../../components/carouselSlider/CarouselSlider";

import "./Homepage.css";

const Homepage = () => {
  return (
    <div className="homepage">
      <Banner />
      <CarouselSlider />

      <section className="card_sections">
        <Container>
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
          <CardProduct />
        </Container>
      </section>
    </div>
  );
};

export default Homepage;
