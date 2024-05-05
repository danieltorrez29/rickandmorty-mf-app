import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import Characters from "./components/Characters";

import "bootstrap/dist/css/bootstrap.min.css";

const App = () => (
  <BrowserRouter>
    <Characters />
  </BrowserRouter>
);

ReactDOM.createRoot(document.getElementById("app")).render(<App />);
