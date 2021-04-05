import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import AddProducts from "../AddProducts/AddProducts";

const Admin = () => {
  return (
    <div>
      <Navbar className="navigation bg-light m-2 " expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className=" ml-lg-auto mr-lg-auto ml-sm-1 mb-2 mb-lg-0">
            <Link className="mr-auto nav-link" to="/addProducts">
              Add Products
            </Link>
            <Link className="mr-auto nav-link" to="/editProduct">
              Edit Products
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <AddProducts></AddProducts>
    </div>
  );
};

export default Admin;
