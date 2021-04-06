import React from "react";
import { useHistory } from "react-router";

import "./AllProduct.css";
const AllProduct = (props) => {
  const { _id, name, price, imgURL } = props.product;
  const history = useHistory();
  const handleBuyNow = (id) => {
    const url = `checkout/${id}`;
    history.push(url);
  };
  return (
    <div className="d-inline-flex col-12 mt-auto col-lg-4 p-4">
      <div class="mainCard card">
        <img src={imgURL} class="card-img-top img-thumbnail p-2" alt="..." />
        <div class="card-body text-center ">
          <h4 class="card-title">{name} </h4>
          <h4 class="card-title">${price} </h4>
          <button onClick={() => handleBuyNow(_id)} class="btn btn-info w-50 ">
            BUY NOW
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllProduct;
