import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "./style.css";

ReactDOM.render(
  <React.StrictMode>
    <App basename={process.env.PUBLIC_URL} />
  </React.StrictMode>,
  document.getElementById("root")
);
