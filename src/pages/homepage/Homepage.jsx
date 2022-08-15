import { Container } from "react-bootstrap";
import Banner from "../../components/banner/Banner";
import "./Homepage.css";

const Homepage = () => {
  return (
    <div className="homepage">
      <Container>
        <Banner />
      </Container>
    </div>
  );
};

export default Homepage;
