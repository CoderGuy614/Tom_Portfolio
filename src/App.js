import React from "react";
import About from "./pages/About";
import People from "./pages/People";
import Places from "./pages/Places";
import Corporate from "./pages/Corporate";
import Contact from "./pages/Contact";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import PhotoSwipePage from "./pages/PhotoSwipePage";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Home from "./pages/Home";
import "./styles/global.css";
import "react-photoswipe/lib/photoswipe.css";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Switch>
        <Route exact path="/about" component={About} />
        <Route exact path="/people" component={People} />
        <Route exact path="/places" component={Places} />
        <Route exact path="/corporate" component={Corporate} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/photoswipe" component={PhotoSwipePage} />
        <Route exact path="/" component={Home} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
