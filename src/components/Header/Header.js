import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="container-fluid bg-light">
      <div className="row">
        <div className="col-md-10 mx-auto">
          <Navbar className="navigation " expand="lg">
            <Navbar.Brand className="mr-auto " to="/">
              <Link to="/" className="title nav-link">
                <h2>Mobile Shop</h2>
              </Link>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className=" ml-lg-auto ml-sm-1 mb-2 mb-lg-0">
                <Link className="mr-auto nav-link" to="/home">
                  <h6>Home</h6>
                </Link>
                <Link className="mr-auto nav-link" to="/checkout">
                  <h6>Check Out</h6>
                </Link>
                <Link className="mr-auto nav-link" to="/orders">
                  <h6>Orders</h6>
                </Link>
                <Link className="mr-auto nav-link" to="/deals">
                  <h6>Deals</h6>
                </Link>
                <Link className="mr-auto nav-link" to="/admin">
                  <h6>Admin</h6>
                </Link>
                <Link className="mr-auto nav-link" to="/login">
                  <h6>Login</h6>
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </div>
      </div>
    </div>
  );
};

export default Header;
