import React from "react";
import { AppProvider } from "./store";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import Rest from "./Rest";
import "./App.css";
import Header from "./Header";

function App() {
  return (
    <AppProvider>
      <Router>
        <div className="App">
          <Header />
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
    </AppProvider>
  );
}

export default App;
