import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import App from "./layout/App";
import { StoreProvider } from "./context/store";

import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
  <StoreProvider>
    <App />
  </StoreProvider>,
  document.getElementById("root")
);
