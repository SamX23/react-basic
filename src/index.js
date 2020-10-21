import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./layout/App.jsx";
import { StoreProvider } from "./context/store";


ReactDOM.render(
    <StoreProvider>
        <App />
    </StoreProvider>,
    document.getElementById("root"));