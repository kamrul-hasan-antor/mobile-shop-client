import React, { useContext, useState } from "react";
import { UserContext } from "../../App";
import { useHistory, useLocation } from "react-router";
import { googleSignIn, initializeSignIn } from "./ManageLogin";
import GoogleImage from "../../images/Group 573.png";
import "./Login.css";

const Login = () => {
  initializeSignIn();
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [user, setUser] = useState({
    isSignIn: false,
    userName: "",
    email: "",
    password: "",
    imgSrc: "",
    error: "",
    success: false,
  });

  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  const handleResponse = (res, redirect) => {
    setUser(res);
    setLoggedInUser(res);
    if (redirect) {
      history.replace(from);
    }
  };

  const handleGoogleSignIn = () => {
    googleSignIn().then((res) => {
      handleResponse(res, true);
    });
  };
  return (
    <div className="mt-5 text-center justify-content-center">
      <button
        onClick={handleGoogleSignIn}
        className="w-25 btn btn-light border border-info"
        type="submit"
      >
        <img src={GoogleImage} alt="" className="googleIcon float-left" />
        Login With Google
      </button>
    </div>
  );
};

export default Login;
