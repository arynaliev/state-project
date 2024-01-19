import React, { useState } from "react";
import "./fizzBuzz.style.css";

const FizzBuzz = () => {
  const [count, setCount] = useState(0);

  const onMinusClick = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  const onPlusClick = () => {
    if (count < 30) {
      setCount(count + 1);
    }
  };

  const showMessage = () => {
    if (!(count % 15)) {
      return <p>FizzBuzz!</p>;
    } else if (count % 5 === 0) {
      return <p>Buzz!</p>;
    } else if (count % 3 === 0) {
      return <p>Fizz!</p>;
    } else {
      return <p>{count}</p>;
    }
  };

  return (
    <div className="fizz-buzz-box">
      <button onClick={onMinusClick}> - </button>
      <p>{showMessage()}</p>
      <button onClick={onPlusClick}> + </button>
    </div>
  );
};

export default FizzBuzz;
