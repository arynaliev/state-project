import React, { useState } from "react";

const FizzBuzz = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="buttons-box">
      <button> + </button>
      <h1>{count}</h1>
      <button> - </button>
    </div>
  );
};

export default FizzBuzz;
