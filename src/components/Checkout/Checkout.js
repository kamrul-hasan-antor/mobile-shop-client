import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router";
import "./Checkout.css";

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
    <div className="checkoutMain m-5 bg-light">
      <h2>Checkout</h2>
      <table>
        <tr>
          <th>Mobile Name</th>
          <th>Quantity</th>
          <th>Price</th>
        </tr>
        <tr>
          <td className="checkoutProduct">{name}</td>
          <td className="checkoutProduct">{quantity}</td>
          <td className="checkoutProduct">${price}</td>
        </tr>
        <tr>
          <td>Total</td>
          <td></td>
          <td>${price} </td>
        </tr>
      </table>
    </div>
  );
};

export default Checkout;
