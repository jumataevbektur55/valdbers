import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import RoodContext from "./context/RoodContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <RoodContext>
        <App />
      </RoodContext>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
