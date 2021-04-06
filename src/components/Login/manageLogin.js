import firebase from "firebase/app";
import "firebase/auth";
import firebaseConfig from "./firebase.config";

export const initializeSignIn = () => {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  } else {
    firebase.app();
  }
};
//////Google SignIn
export const googleSignIn = () => {
  const googleProvider = new firebase.auth.GoogleAuthProvider();
  return firebase
    .auth()
    .signInWithPopup(googleProvider)
    .then((res) => {
      const { displayName, email, photoURL } = res.user;
      const signedInUser = {
        isSignIn: true,
        displayName,
        email,
        imgSrc: photoURL,
        success: true,
      };
      return signedInUser;
    })
    .catch((err) => {
      const errorCode = err.code;
      const errorMessage = err.message;
      console.log(errorCode, errorMessage);
    });
};
