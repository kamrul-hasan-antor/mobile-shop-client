import { CircularProgress } from "@material-ui/core";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import AllProduct from "../AllProduct/AllProduct";
import EditProduct from "../EditProduct/EditProduct";

const Home = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const url = "http://localhost:5000/products";
    fetch(url)
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <div>
      {products.length === 0 && <CircularProgress color="primary" />}
      {products.map((product) => (
        <AllProduct product={product}></AllProduct>
      ))}
    </div>
  );
};

export default Home;
