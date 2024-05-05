import React, { useState } from "react";
import "./Counter.css";
import Button from "react-bootstrap/Button";

const Counter = ({ initialCounter }) => {
  if (initialCounter === undefined) {
    return (
      <div className="error-message">
        <h3>Counter MF</h3>
        <span>Counter not ready</span>
      </div>
    );
  }

  const [counter, setCounter] = useState(initialCounter);

  const handleIncrement = () => {
    setCounter(counter + 1);
  };

  const handleDecrement = () => {
    setCounter(counter - 1);
  };

  const getCounterColor = () => {
    if (counter < 0) {
      return "red";
    } else if (counter === 0 || counter > 0) {
      return "green";
    }
  };

  return (
    <div className="counter-container">
      <h3>Counter MF</h3>
      <div className="button-container">
        <Button
          onClick={handleDecrement}
          variant="danger"
          className="button-decrement"
          style={{ backgroundColor: "red", borderColor: "red" }}
        >
          -
        </Button>
        <h4 className="counter" style={{ color: getCounterColor() }}>
          {counter}
        </h4>
        <Button
          onClick={handleIncrement}
          variant="primary"
          className="button-increment"
          style={{ backgroundColor: "green", borderColor: "green" }}
        >
          +
        </Button>
      </div>
    </div>
  );
};

export default Counter;
