import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Rest from "./Rest";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <header>
          <nav>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/rest">Rest</Link>
          </nav>
        </header>
        <Switch>
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

export default App;
