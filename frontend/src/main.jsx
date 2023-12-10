import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "owl.carousel/dist/assets/owl.carousel.css";
import "owl.carousel/dist/assets/owl.theme.default.css";
import "./index.css";
import { ContextProvider } from "../src/context/ContextProvider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <ContextProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ContextProvider>
);
