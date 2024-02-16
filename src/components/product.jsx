import React from "react";

const Product = (props) => {
  return (
    <div>
      <div className="card mt-4" style={{ width: "100%" }}>
        <img
          src={props.image}
          className="card-img-top"
          width={"100%"}
          height={200}
          alt="..."
        />
        <div className="card-body" style={{ height: 150 }}>
          <h5 className="card-title">{props.title}</h5>
        </div>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Price: {props.price}$</li>
        </ul>
      </div>
    </div>
  );
};

export default Product;
