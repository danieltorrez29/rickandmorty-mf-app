import React from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="container text-center">
      <div className="display-1 text-danger">404 - Page Not Found</div>
      <p className="text-warning">
        The page you are looking for might have been remove, had its name
        changed, or is temporarily unavailable.
      </p>
      <Button as={Link} to={"/"} variant="primary">
        Go Home
      </Button>
    </div>
  );
};

export default NotFound;
