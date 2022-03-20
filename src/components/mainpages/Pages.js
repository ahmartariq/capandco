import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./home/Home";
import NotFound from "./notFound/NotFound";
import Servies from "./services/Servies";
import ContactUs from "./contactUs/ContactUs";

function Pages() {

  return (
    <Switch>
      <Route path="/" exact component={Home} />

      <Route path="/services-and-pricing" exact component={Servies} />
      <Route path="/contact-us" exact component={ContactUs} />
      <Route path="*" exact component={NotFound} />
    </Switch>
  );
}

export default Pages;
