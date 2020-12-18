import React from "react";
import { Button } from "react-bootstrap";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import "./styles/global.css";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" component={Home} />
      </Switch>{" "}
    </BrowserRouter>
  );
};

export default App;
