import { Col, Container, Row } from "react-bootstrap";
import CardProduct from "../../components/cardProduct/CardProduct";

const ProductPage = () => {
  return (
    <div className="product_page">
      <Container>
        <Row>
          <Col sm={12} md={6} lg={4} xl={4} className="pt-5">
            <CardProduct />
          </Col>
          <Col sm={12} md={6} lg={4} xl={4} className="pt-5">
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

export default ProductPage;
