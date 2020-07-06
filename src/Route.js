import React from "react";
import { Home } from "./components/Home";
import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Navbar } from "./components/Navbar";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function RouteConfig() {
  return (
    <div>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={About} />
          <Route path="*" component={() => <h2>Error 404</h2>} />
        </Switch>
      </Router>
    </div>
  );
}
export default RouteConfig;
