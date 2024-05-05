import React from "react";
import ReactDOM from "react-dom/client";

import "bootstrap/dist/css/bootstrap.min.css";
import NavbarComponent from "./components/NavbarComponent";
import { BrowserRouter } from "react-router-dom";

const App = () => (
  <BrowserRouter>
    <NavbarComponent />
  </BrowserRouter>
);
ReactDOM.createRoot(document.getElementById("app")).render(<App />);
