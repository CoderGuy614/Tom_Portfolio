import { React, useState } from "react";
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

import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import "./styles/global.css";
import "react-photoswipe/lib/photoswipe.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-image-gallery/styles/css/image-gallery.css";

const App = () => {
  const [updateActive, setUpdateActive] = useState(false);

  return (
    <BrowserRouter>
      <Navigation updateActive={updateActive} />
      <Switch>
        <Route exact path="/about" component={About} />

        <Route
          exact
          path="/location-cool-places"
          component={LocationCoolPlaces}
        />
        <Route exact path="/location-learn" component={LocationLearn} />
        <Route exact path="/location-live" component={LocationLive} />
        <Route exact path="/location-work" component={LocationWork} />
        <Route exact path="/photoshop" component={Photoshop} />
        <Route
          exact
          path="/portraits-environmental"
          component={PortraitsEnvironmental}
        />

        <Route exact path="/portraits-studio" component={PortraitsStudio} />
        <Route exact path="/personal" component={Personal} />
        <Route exact path="/contact" component={Contact} />

        <Route
          exact
          path="/home"
          render={() => (
            <Home
              setUpdateActive={setUpdateActive}
              updateActive={updateActive}
            />
          )}
        />
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
      </Switch>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
