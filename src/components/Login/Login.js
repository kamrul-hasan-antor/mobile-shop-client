import React, { useContext, useState } from "react";
import { UserContext } from "../../App";
import { useHistory, useLocation } from "react-router";
import {
  createUserWithEmailAndPassword,
  SignInUserWithEmailAndPassword,
  googleSignIn,
  initializeSignIn,
  updateUserInfo,
} from "./ManageLogin";

const Login = () => {
  initializeSignIn();
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  // const [newUser, setNewUser] = useState(false);
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

  // const handleSubmit = (event) => {
  //   if (newUser && user.name && user.email && user.password) {
  //     createUserWithEmailAndPassword(user.name, user.email, user.password).then(
  //       (res) => {
  //         handleResponse(res, true);
  //         updateUserInfo(user.name);
  //       }
  //     );
  //   }
  //   if (!newUser && user.email && user.password) {
  //     SignInUserWithEmailAndPassword(user.email, user.password).then((res) => {
  //       handleResponse(res, true);
  //       setLoggedInUser(res);
  //     });
  //   }
  //   event.preventDefault();
  // };
  return (
    <div className="form-signin mt-5  text-center justify-content-center">
      <button
        onClick={handleGoogleSignIn}
        className="w-25 btn btn-light border border-dark"
        type="submit"
      >
        Login With Google
      </button>
    </div>
  );
};

export default Login;
