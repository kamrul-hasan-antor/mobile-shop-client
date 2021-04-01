import React, { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

const AddProducts = () => {
  const { register, handleSubmit } = useForm();
  const [imgURL, setImgURL] = useState();
  const onSubmit = (data) => {
    const productData = {
      name: data.name,
      imgURL: imgURL,
      quantity: data.quantity,
      price: data.price,
    };
    const url = `http://localhost:5000/addProduct`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(productData),
    }).then((res) => console.log("sever received"));
  };
  const handleImageUpload = (event) => {
    const imageData = new FormData();
    imageData.set("key", "69644614aa951c91fb0cbe64fb2da4e3");
    imageData.append("image", event.target.files[0]);

    axios
      .post("https://api.imgbb.com/1/upload", imageData)
      .then(function (response) {
        setImgURL(response.data.data.display_url);
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input name="name" placeholder="Enter Mobile Name" ref={register} />
        <input
          name="quantity"
          placeholder="Enter Mobile Quantity"
          ref={register}
        />
        <input name="price" placeholder="Enter Mobile Price" ref={register} />
        <input
          name="exampleRequired"
          type="file"
          onChange={handleImageUpload}
        />
        <input type="submit" />
      </form>
    </div>
  );
};

export default AddProducts;
