import { Container } from "react-bootstrap";
import CardProduct from "../cardProduct/CardProduct";
import "./Product.css";

const Product = () => {
  return (
    <div className="product">
      <Container>
        <CardProduct />
      </Container>
    </div>
  );
};

export default Product;
