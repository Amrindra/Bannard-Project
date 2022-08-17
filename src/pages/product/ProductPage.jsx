import { Col, Container, Row } from "react-bootstrap";
import CardProduct from "../../components/cardProduct/CardProduct";
import { cardProducts } from "../../utils/data";

const ProductPage = () => {
  return (
    <div className="product_page">
      <Container>
        <Row>
          {cardProducts.map((item) => (
            <Col sm={12} md={6} lg={4} xl={4} className="pt-5">
              <CardProduct
                cardImg={item.cardImg}
                cardTitle={item.cardTitle}
                cardDesc={item.cardDesc}
              />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ProductPage;
