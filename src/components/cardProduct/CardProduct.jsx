import "./CardProduct.css";

function CardProduct(props) {
  return (
    <div className="card_product">
      <div className="card_product_wrapper">
        <div className="card_top">
          <img src={props.cardImg} alt="card_img" />
        </div>
        <div className="card_body">
          <h3 className="card_title">{props.cardTitle}</h3>
          <p className="card_desc">{props.cardDesc}</p>
          {/* <button className="card_button">Check me out</button> */}
        </div>
      </div>
    </div>
  );
}

export default CardProduct;
