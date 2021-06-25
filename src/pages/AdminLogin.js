import React, { useState } from "react";
import { Form, Alert, Button, Row, Col, Container } from "react-bootstrap";
// import Loading from "../../components/core/Layout/Loading";
import { Redirect } from "react-router-dom";

import firebase from "firebase";
import { Formik } from "formik";
import * as yup from "yup";

const schema = yup.object({
  email: yup.string().email().required(),
  password: yup.string().required(),
});

const AdminLogin = () => {
  const [authUser, setAuthUser] = useState("");
  const [error, setError] = useState(null);

  const login = ({ email, password }) => {
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((userCredential) => {
        setAuthUser(userCredential.user.email);
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        console.log(error.message);
      });
  };

  const showError = () => (
    <Alert variant="danger" style={{ display: error ? "" : "none" }}>
      {error}
    </Alert>
  );

  const redirectUser = () => {
    if (authUser === "admin@tomdubanowich.com" && !error) {
      console.log("I SHOULD REDIRECT");
      return <Redirect to="/adminPage" />;
    }
  };

  return (
    <Container>
      {redirectUser()}
      <Row className="mt-4">
        <Col md={{ span: 6, offset: 3 }}>
          <Formik
            validationSchema={schema}
            onSubmit={(values) => login(values)}
            initialValues={{ email: "admin@tomdubanowich.com", password: "" }}
          >
            {({
              handleSubmit,
              handleChange,
              handleBlur,
              values,
              touched,
              isValid,
              errors,
            }) => (
              <Form noValidate onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    disabled
                    type="email"
                    name="email"
                    placeholder="Enter email"
                    onChange={handleChange}
                    value={values.email}
                    isValid={touched.email && !errors.email}
                    isInvalid={!!errors.email && touched.email}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please Enter a Valid Email Address
                  </Form.Control.Feedback>
                  <Form.Text className="text-muted"></Form.Text>
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    name="password"
                    type="password"
                    placeholder="Password"
                    onChange={handleChange}
                    value={values.password}
                    isValid={touched.password && !errors.password}
                    isInvalid={!!errors.password && touched.password}
                  />
                  <Form.Control.Feedback type="invalid">
                    Please Enter your Password
                  </Form.Control.Feedback>
                </Form.Group>
                {showError()}
                <Button variant="primary" block type="submit">
                  Submit
                </Button>
              </Form>
            )}
          </Formik>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminLogin;
