import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router";

const Checkout = () => {
  const { _id } = useParams();
  const [detail, setDetail] = useState([]);
  useEffect(() => {
    const url = `http://localhost:5000/checkout/${_id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setDetail(data));
  }, [_id]);
  console.log(detail);
  const { name, price, quantity } = detail;
  return (
    <div className="container">
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Product Name</th>
            <th>Quantity</th>

            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>{name}</td>
            <td>{quantity}</td>
            <td>${price}</td>
          </tr>
          <tr>
            <td></td>
            <td colSpan="3">Total</td>
            <td>${price}</td>
          </tr>
        </tbody>
      </table>
      <button variant="primary"> Checkout</button>
    </div>
  );
};

export default Checkout;
