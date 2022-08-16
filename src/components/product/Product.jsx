import { Col, Container, Row } from "react-bootstrap";
import CardProduct from "../cardProduct/CardProduct";
import "./Product.css";

const Product = () => {
  return (
    <div className="product">
      <Container>
        <Row className="pt-5">
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
    </div>
  );
};

export default Product;
