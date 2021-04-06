import React from "react";
import { useState, useContext, useEffect } from "react";
import { useHistory, useParams } from "react-router";
import { UserContext } from "../../App";
import "./Checkout.css";

const Checkout = () => {
  const { _id } = useParams();
  const [detail, setDetail] = useState([]);
  const [loggedinUser, setLoggedinUser] = useContext(UserContext);

  useEffect(() => {
    const url = `https://morning-fjord-14708.herokuapp.com/checkout/${_id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => setDetail(data));
  }, [_id]);
  console.log(detail);
  const { name, price, quantity } = detail;

  const history = useHistory();
  const handleCheckOut = () => {
    const link = "/orders";
    history.push(link);
    const orderInfo = {
      name,
      price,
      quantity,
      ...loggedinUser,
      orderTime: new Date(),
    };
    const url = `https://morning-fjord-14708.herokuapp.com/addOrders`;

    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderInfo),
    }).then((res) => console.log("server side response", res));
  };

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
      <div className="float-right checkoutBtn">
        <button onClick={handleCheckOut} className="btn btn-primary">
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Checkout;
