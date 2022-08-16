import "./Feature.css";

const Feature = () => {
  return (
    <div className="feature">
      <div className="feature_top">
        <div className="feature_top_left">
          <img
            src="https://user-images.githubusercontent.com/70451928/184708087-f51ad8f7-fe53-4552-8fc0-d4e7cc0f1c2c.PNG"
            alt=""
          />
        </div>
        <div className="feature_top_right">
          <div className="feature_body_wrapper">
            <h3 className="feature_title">Lorem ipsum dolor sit.</h3>
            <p className="feature_desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
              fugiat et facere officiis, voluptatem aliquam.
            </p>
          </div>
        </div>
      </div>

      <div className="feature_bottom">
        <div className="feature_bottom_right">
          <div className="feature_body_wrapper">
            <h3 className="feature_title">Lorem ipsum dolor sit.</h3>
            <p className="feature_desc">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
              fugiat et facere officiis, voluptatem aliquam.
            </p>
          </div>
        </div>
        <div className="feature_bottom_left">
          <img
            src="https://user-images.githubusercontent.com/70451928/184708087-f51ad8f7-fe53-4552-8fc0-d4e7cc0f1c2c.PNG"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Feature;
