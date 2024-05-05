import React from "react";

import Spinner from "react-bootstrap/Spinner";

const LoaderComponent = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <Spinner animation="border" variant="primary" />
    </div>
  );
};

export default LoaderComponent;
