import React from "react";
import ReactDOM from "react-dom/client";

import NotFound from "./components/NotFound";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => (
  <BrowserRouter>
    <NotFound />
  </BrowserRouter>
);

ReactDOM.createRoot(document.getElementById("app")).render(<App />);
