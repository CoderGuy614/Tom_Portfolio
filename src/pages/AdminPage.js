import React, { useState, useEffect } from "react";
import { Form, Alert, Button, Row, Col, Container } from "react-bootstrap";
// import Loading from "../../components/core/Layout/Loading";
import { Redirect } from "react-router-dom";

import firebase from "firebase";

const AdminPage = () => {
  const [authUser, setAuthUser] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChange(setAuthUser);
    return () => {
      unsubscribe();
    };
  }, []);

  function onAuthStateChange(callback) {
    return firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        callback(true);
      } else {
        callback(false);
      }
    });
  }

  const signout = () => {
    const signout = firebase.auth().signOut();
    setAuthUser(null);
    return () => signout();
  };

  const redirectUser = () => {
    if (!authUser) {
      return <Redirect to="/adminLogin" />;
    }
  };

  return (
    <Container>
      {redirectUser()}
      <div>I AM THE ADMIN PAGE</div>
      <Button onClick={() => signout()}>Logout</Button>
    </Container>
  );
};

export default AdminPage;
