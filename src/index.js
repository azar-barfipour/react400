import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";

import "./style.css";

import App from "./App";

ReactDOM.render(
  <Router>
    <div className="yellow-border" />
      <div className="container">
        <App />
      </div>
  </Router>,
  document.getElementById("root")
);
