import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "../styles/App.css";

const Home = lazy(() => import("./Home"));
const About = lazy(() => import("./About"));
const Header = lazy(() => import("../components/Header"));
const Rest = lazy(() => import("./Rest"));
const Register = lazy(() => import("./Register"));
const Login = lazy(() => import("./Login"));
const ContextApiContainer = lazy(() => import("./ContextApi"));

export default function App() {
  return (
    <Router>
      <div className="App">
        <Suspense
          fallback={<div className="Loading__screen">Loading Page .....</div>}
        >
          <Header />
          <Switch>
            <Route path="/login">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
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
        </Suspense>
      </div>
    </Router>
  );
}
