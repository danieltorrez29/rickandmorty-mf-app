import React from "react";
import ReactDOM from "react-dom/client";

import "bootstrap/dist/css/bootstrap.min.css";
import Counter from "./components/Counter";

const App = () => (
  <div className="container text-center mt-10">
    <Counter initialCounter={0} />
  </div>
);
ReactDOM.createRoot(document.getElementById("app")).render(<App />);
