import React, { useEffect, useState } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Delete from "../../images/Group 33150.png";
import "./EditProduct.css";
const EditProduct = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const url = "https://morning-fjord-14708.herokuapp.com/products";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  const handleClick = (id) => {
    const url = `https://morning-fjord-14708.herokuapp.com/delete/${id}`;
    fetch(url, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => console.log("deleted"));
  };
  return (
    <div>
      <Navbar className="navigation bg-secondary mt-2  " expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className=" ml-lg-auto mr-lg-auto ml-sm-1 mb-2 mb-lg-0">
            <Link className="mr-auto text-white  nav-link" to="/addProducts">
              Add Products
            </Link>
            <Link className="mr-auto text-white nav-link" to="/editProduct">
              Edit Products
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div className="bg-light p-2">
        <div className="row text-center">
          <div className="col-lg-5 col-md-5 bg-white mt-2 p-3">
            <h4>Products Name and Image</h4>
          </div>
          <div className="col-md-2 col-lg-2 bg-white mt-2 p-3">
            <h4>Quantity</h4>
          </div>
          <div className="col-md-2 col-lg-3 bg-white mt-2 p-3">
            <h4>Price</h4>
          </div>
          <div className="col-md-2 col-lg-2 bg-white mt-2 p-3">
            <h4>Action</h4>
          </div>
        </div>
        {product.map((pd) => {
          return (
            <div className="mt-3">
              <div className="row text-center mt-1 bg-white align-items-center ">
                <div className="col-lg-5 col-md-5 d-flex align-items-center">
                  <img className="productImg" src={pd.imgURL} alt="" />
                  <h5 className="justify-content-center">{pd.name}</h5>
                </div>
                <div className="col-md-2 col-lg-2">
                  <h6>{pd.quantity}</h6>
                </div>
                <div className="col-md-3 col-lg-3">
                  <h6>${pd.price}</h6>
                </div>
                <div className="col-md-2 col-lg-2">
                  <Link onClick={() => handleClick(`${pd._id}`)}>
                    <img className="deleteBtn" src={Delete} alt="" />
                  </Link>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default EditProduct;
