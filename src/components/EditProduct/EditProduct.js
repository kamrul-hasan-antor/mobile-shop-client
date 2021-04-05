import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
const EditProduct = () => {
  return (
    <div>
      <Navbar className="navigation bg-info container " expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className=" ml-lg-auto mr-lg-auto ml-sm-1 mb-2 mb-lg-0">
            <Link className="mr-auto  nav-link" to="/addProducts">
              Add Products
            </Link>
            <Link className="mr-auto nav-link" to="/editProduct">
              Edit Products
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <h1>hello</h1>
    </div>
  );
};

export default EditProduct;
