import { Link } from "@material-ui/core";
import React from "react";
import { Col, Row } from "react-bootstrap";
import AddProducts from "../AddProducts/AddProducts";
import EditProduct from "../EditProduct/EditProduct";

const Admin = () => {
  return (
    <div className="bg-light">
      <Row>
        <Col md={2} className="bg-dark">
          <Link to="#addProduct" className="text-white">
            Add Product Here
          </Link>
          <br />
          <Link to="/editproduct" className="text-white">
            Edit Product Here
          </Link>
          <br />
          <Link to="#manageproduct" className="text-white">
            Manage Product Here
          </Link>
        </Col>
        <Col md={10}>
          <AddProducts></AddProducts>
          <EditProduct></EditProduct>
        </Col>
      </Row>
    </div>
  );
};

export default Admin;
