import React from "react";
import ReactDOM from "react-dom/client";

import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter } from "react-router-dom";
import About from "./components/About";

const App = () => (
  <BrowserRouter>
    <About />
  </BrowserRouter>
);
ReactDOM.createRoot(document.getElementById("app")).render(<App />);
