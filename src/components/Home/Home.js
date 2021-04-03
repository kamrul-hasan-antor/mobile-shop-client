import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import AllProduct from "../AllProduct/AllProduct";

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
      {products.map((product) => (
        <AllProduct product={product}></AllProduct>
      ))}
    </div>
  );
};

export default Home;
