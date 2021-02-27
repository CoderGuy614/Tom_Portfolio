import React from "react";
import Home from "./pages/Home";
import About from "./pages/About";

import LocationCoolPlaces from "./pages/LocationCoolPlaces";
import LocationLearn from "./pages/LocationLearn";
import LocationWork from "./pages/LocationWork";
import LocationLive from "./pages/LocationLive";
import Personal from "./pages/Personal";
import Photoshop from "./pages/Photoshop";
import PortraitsEnvironmental from "./pages/PortraitsEnvironmental";
import PortraitsStudio from "./pages/PortraitsStudio";
import Contact from "./pages/Contact";

import Navigation from "./components/Navigation";
import Footer from "./components/Footer";

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
        <Route path="/about" component={About} />

        <Route path="/location-cool-places" component={LocationCoolPlaces} />
        <Route path="/location-learn" component={LocationLearn} />
        <Route path="/location-live" component={LocationLive} />
        <Route path="/location-work" component={LocationWork} />
        <Route path="/photoshop" component={Photoshop} />
        <Route
          path="/portraits-environmental"
          component={PortraitsEnvironmental}
        />
        <Route path="/portraits-studio" component={PortraitsStudio} />
        <Route path="/personal" component={Personal} />

        <Route path="/contact" component={Contact} />

        <Route path="/" component={Home} />
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
