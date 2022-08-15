import { Carousel, Container } from "react-bootstrap";
import Banner from "../../components/banner/Banner";
import CarouselSlider from "../../components/carouselSlider/CarouselSlider";

import "./Homepage.css";

const Homepage = () => {
  return (
    <div className="homepage">
      {/* <Banner /> */}
      <CarouselSlider />
    </div>
  );
};

export default Homepage;
