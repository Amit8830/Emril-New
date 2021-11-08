import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "./App.css";
import MainPage from "./MainPage";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Maintance from "./pages/Maintance";
import Ecommerce from "./pages/E-commerce";
import Club from "./pages/Club";
import Rento from "./pages/Rento";
import Food from "./pages/Food";
import Education from "./pages/Education";
import Banking from "./pages/Banking";
import Hospital from "./pages/Hospital";
import Other from "./pages/Other";
import Signin from "./pages/Signin";
import Map from "./pages/Map";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={MainPage} />
        <Route exact path="/maintance" component={Maintance} />
        <Route exact path="/ecommerce" component={Ecommerce} />
        <Route exact path="/club" component={Club} />
        <Route exact path="/rento" component={Rento} />
        <Route exact path="/food" component={Food} />
        <Route exact path="/education" component={Education} />
        <Route exact path="/banking" component={Banking} />
        <Route exact path="/hospital" component={Hospital} />
        <Route exact path="/other" component={Other} />
        <Route exact path="/map" component={Map} />
        <Route exact path="/signin" component={Signin} />
      </Switch>
    </Router>
  );
}

export default App;
