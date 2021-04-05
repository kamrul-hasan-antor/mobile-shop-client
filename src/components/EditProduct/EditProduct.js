import React, { useEffect, useState } from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import Delete from "../../images/Group 33150.png";
import "./EditProduct.css";
const EditProduct = () => {
  const [product, setProduct] = useState([]);
  useEffect(() => {
    const url = "http://localhost:5000/products";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProduct(data));
  }, []);
  const handleClick = (id) => {
    const url = `http://localhost:5000/delete/${id}`;
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
        <div className="row text-center ">
          <div className="col-lg-5 col-md-5 bg-white mt-2 p-3">
            <h4>Product Name</h4>
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
              <div className="row text-center">
                <div className="col-lg-5 col-md-5">
                  <h5>{pd.name}</h5>
                </div>
                <div className="col-md-2 col-lg-2">
                  <h6>{pd.quantity}</h6>
                </div>
                <div className="col-md-3 col-lg-3">
                  <h6>${pd.price}</h6>
                </div>
                <div className="col-md-2 col-lg-2">
                  <button onClick={handleClick(`${pd._id}`)}>
                    {/* <img className="deleteBtn" src={Delete} alt="" /> */}
                    delete
                  </button>
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
