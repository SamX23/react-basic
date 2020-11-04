import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./layout/App";
import { StoreProvider } from "./context/store";

ReactDOM.render(
  <StoreProvider>
    <App />
  </StoreProvider>,
  document.getElementById("root")
);
