import React from "react";
import ReactDOM from "react-dom/client";
import "bootstrap/dist/css/bootstrap.min.css";
import LoaderComponent from "./components/LoaderComponent";

const App = () => <LoaderComponent />;
ReactDOM.createRoot(document.getElementById("app")).render(<App />);
