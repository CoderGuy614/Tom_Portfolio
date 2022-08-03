import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import firebase from "firebase/app";

//  Config for jlutz.110 firebase console hosting
var firebaseConfig = {
  apiKey: "AIzaSyA-DMl9FuzMPe6fQda2V5dn0PnsyPfsk94",
  authDomain: "tomportfolio-a3844.firebaseapp.com",
  projectId: "tomportfolio-a3844",
  storageBucket: "tomportfolio-a3844.appspot.com",
  messagingSenderId: "34538496153",
  appId: "1:34538496153:web:fa6af9f67158c93a911808",
  measurementId: "G-XFG0H2TF1S",
};

// June 2021 Changed to ubano2021 firebase hosting
// var firebaseConfig = {
//   apiKey: "AIzaSyCCeGbEJg-HZHivLQ7Og9hjsM8LYlVzDxg",
//   authDomain: "tom-dubanowich-portfolio.firebaseapp.com",
//   projectId: "tom-dubanowich-portfolio",
//   storageBucket: "tom-dubanowich-portfolio.appspot.com",
//   messagingSenderId: "871598656190",
//   appId: "1:871598656190:web:5c14b87b36c061d2ca6cef",
//   measurementId: "G-RJX7HJJXGM",
// };
firebase.initializeApp(firebaseConfig);
firebase.analytics();

ReactDOM.render(<App />, document.getElementById("root"));
