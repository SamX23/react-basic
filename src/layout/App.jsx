import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./Home.jsx";
import About from "./About.jsx";
import Header from "../components/Header.jsx";
import Rest from "./Rest.jsx";
import "../styles/App.css";
import ContextApiContainer from "./ContextApi.jsx";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/context-api">
            <ContextApiContainer />
          </Route>
          <Route path="/rest">
            <Rest />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
