import "./CardProduct.css";

function CardProduct() {
  return (
    <div className="card_product">
      <div className="card_product_warpper">
        <div className="card_top">
          <img
            src="https://user-images.githubusercontent.com/70451928/184723528-a522a10a-3a3a-46bd-98e6-024f658926e7.png"
            alt="card_img"
          />
        </div>
        <div className="card_body">
          <h3 className="card_title">Card Title</h3>
          <p className="card_desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio
            explicabo, eaque, veritatis et delectus, quibusdam similique iste
            dolorum iure blanditiis ipsam. Ratione impedit illo rem ab
            perspiciatis voluptatum perferendis veniam.
          </p>
          {/* <button className="card_button">Check me out</button> */}
        </div>
      </div>
    </div>
  );
}

export default CardProduct;
