import React, { useState } from "react";
import "./AddProducts.css";
import { useForm } from "react-hook-form";
import axios from "axios";

const AddProducts = () => {
  const { register, handleSubmit } = useForm();
  const [imgURL, setImgURL] = useState(null);
  const onSubmit = (data) => {
    const productData = {
      name: data.name,
      imgURL: imgURL,
      quantity: data.quantity,
      price: data.price,
    };
    const url = `https://morning-fjord-14708.herokuapp.com/addProduct`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(productData),
    }).then((res) => console.log(res));
  };
  const handleImageUpload = (event) => {
    const imageData = new FormData();
    imageData.set("key", "d6e632f3c56512e7e488a9c05a90ab9a");
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
      <div className="mainForm">
        <form className="mt-5" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-row w-75 ml-auto mr-auto">
            <div className="col-md-5">
              <input
                className="form-control mt-3"
                name="name"
                placeholder="Enter Mobile Name"
                ref={register}
              />
            </div>
            <div className="col-md-5">
              <input
                className="form-control mt-3"
                name="quantity"
                placeholder="Enter Mobile Quantity"
                ref={register}
              />
            </div>
            <div className="col-md-5">
              <input
                className="form-control mt-3"
                name="price"
                placeholder="Enter Mobile Price"
                ref={register}
              />
            </div>
            <div className="col-md-5">
              <input
                className="mt-3 btn btn-light w-75"
                name="exampleRequired"
                type="file"
                onChange={handleImageUpload}
              />
              <input className="btn btn-primary ml-1 mt-3" type="submit" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddProducts;
