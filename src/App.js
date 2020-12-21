import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";
import Institutions from "./pages/Institutions";
import Location from "./pages/Location";
import Industrial from "./pages/Industrial";
import Contact from "./pages/Contact";
import Personal from "./pages/Personal";
import Portrait from "./pages/Portrait";
import Gallery from "./pages/Gallery";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import PhotoSwipePage from "./pages/PhotoSwipePage";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./styles/global.css";
import "react-photoswipe/lib/photoswipe.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-image-gallery/styles/css/image-gallery.css";

const App = () => {
  return (
    <BrowserRouter>
      <Navigation />
      <Switch>
        <Route exact path="/about" component={About} />
        <Route exact path="/institutions" component={Institutions} />
        <Route exact path="/location" component={Location} />
        <Route exact path="/industrial" component={Industrial} />
        <Route exact path="/personal" component={Personal} />
        <Route exact path="/portraits" component={Portrait} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/photoswipe" component={PhotoSwipePage} />
        <Route exact path="/gallery" component={Gallery} />
        <Route exact path="/" component={Home} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
