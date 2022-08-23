import { Container } from "react-bootstrap";
import "./Footer.css";
import { FaYoutubeSquare, FaFacebookSquare } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="footer">
      <Container>
        <div className="footer_wrapper">
          <div className="footer_logo">
            <h1>T-Rid</h1>
            <div className="footer_icons">
              <FaYoutubeSquare className="youtube_icon" />
              <FaFacebookSquare className="facebook_icon" />
            </div>
          </div>

          <div className="footer_left">
            <ul className="footer_list">
              <li className="footer_item">Test</li>
              <li className="footer_item">Test</li>
              <li className="footer_item">Test</li>
              <li className="footer_item">Test</li>
              <li className="footer_item">Test</li>
              <li className="footer_item">Test</li>
            </ul>
          </div>

          <div className="footer_center">
            <ul className="footer_list">
              <li className="footer_item">Test</li>
              <li className="footer_item">Test</li>
              <li className="footer_item">Test</li>
              <li className="footer_item">Test</li>
              <li className="footer_item">Test</li>
              <li className="footer_item">Test</li>
            </ul>
          </div>

          <div className="footer_right">
            <ul className="footer_list">
              <li className="footer_item">Test</li>
              <li className="footer_item">Test</li>
              <li className="footer_item">Test</li>
              <li className="footer_item">Test</li>
              <li className="footer_item">Test</li>
              <li className="footer_item">Test</li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Footer;
