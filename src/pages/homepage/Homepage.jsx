import { Container } from "react-bootstrap";
import Banner from "../../components/banner/Banner";
import Feature from "../../components/feature/Feature";
import CarouselSlider from "../../components/carouselSlider/CarouselSlider";
import "./Homepage.css";

const Homepage = () => {
  return (
    <main className="homepage">
      <Banner />
      <Container>
        <Feature />
      </Container>
      <CarouselSlider />

      <section className="card_sections"></section>
    </main>
  );
};

export default Homepage;
