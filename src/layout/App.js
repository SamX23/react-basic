import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Loading from "../components/Loading";
import TopNavigation from "../components/TopNavigation";
import Footer from "../components/Footer";

const Home = lazy(() => import("./Home"));
const About = lazy(() => import("./About"));
const Rest = lazy(() => import("./Rest"));
const Register = lazy(() => import("./Register"));
const Login = lazy(() => import("./Login"));
const Account = lazy(() => import("./Account"));

export default function App() {
  return (
    <Router>
      <TopNavigation />
      <Suspense fallback={<Loading />}>
        <Switch>
          <Route path="/account">
            <Account />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
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
        <Footer />
      </Suspense>
    </Router>
  );
}
