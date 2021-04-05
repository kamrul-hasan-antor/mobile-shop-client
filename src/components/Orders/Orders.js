import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
import { UserContext } from "../../App";

const Orders = () => {
  const [loggedinUser, setLoggedinUser] = useContext(UserContext);
  const [orders, setOrders] = useState([]);

  const filterOrders = (data) => {
    const filterData = data.filter(
      (order) => order.email == loggedinUser.email
    );
    setOrders(filterData);
  };
  useEffect(() => {
    fetch("http://localhost:5000/orders")
      .then((res) => res.json())
      .then((data) => filterOrders(data));
  }, []);
  const history = useHistory();
  const handleConfirmOrders = () => {
    const url = "/deals";
    history.push(url);
  };
  return (
    <div className="container mt-4 bg-light">
      <div class="row">
        <div class="col-12 col-md-6 bg-primary text-center text-white p-3">
          <h5> Total Orders : {orders.length} </h5>
        </div>
        <div class="col-12 col-md-6 bg-success text-white p-3">
          <h5>Customer Email: {loggedinUser.email} </h5>
        </div>
      </div>
      <div className="row bg-info text-white text-center mt-2 p-3">
        <div className="col-12 col-md-6 ">
          <h5>Product name</h5>
        </div>
        <div className="col-12 col-md-3">
          <h5>Quantity</h5>
        </div>
        <div className="col-12 col-md-3">
          <h5>Price</h5>
        </div>
      </div>
      {orders.map((singleOrder) => {
        return (
          <div className="">
            <div className="row bg-secondary text-white text-center mt-2 p-3">
              <div className="col-12 col-md-6 ">
                <h6>{singleOrder.name}</h6>
              </div>
              <div className="col-12 col-md-3">
                <h6>{singleOrder.quantity}</h6>
              </div>
              <div className="col-12 col-md-3">
                <h6>${singleOrder.price}</h6>
              </div>
            </div>
          </div>
        );
      })}
      <button onClick={handleConfirmOrders} className="btn btn-primary m-2">
        Confirm Your Orders
      </button>
    </div>
  );
};

export default Orders;
