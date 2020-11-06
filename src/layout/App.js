import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Container, Col, Row } from "react-bootstrap";
import styled from "@emotion/styled";

import Loading from "../components/Loading";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Home = lazy(() => import("./Home"));
const About = lazy(() => import("./About"));
const Rest = lazy(() => import("./Rest"));
const Register = lazy(() => import("./Register"));
const Login = lazy(() => import("./Login"));
const ContextApiContainer = lazy(() => import("./ContextApi"));

export default function App() {
  const AppContainer = styled(Container)`
    margin: 0;
    padding: 0;
  `;

  const AppComponents = ({ children }) => {
    return (
      <Row>
        <Col>{children}</Col>
      </Row>
    );
  };

  return (
    <Router>
      <Suspense fallback={<Loading />}>
        <AppContainer fluid>
          <AppComponents>
            <Header />
          </AppComponents>

          <AppComponents>
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
          </AppComponents>

          <Footer />
        </AppContainer>
      </Suspense>
    </Router>
  );
}
