import React from "react";
import { useState } from "react";
import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);

  const plusCount = () => {
    setCount(count + 1);
  };

  const minusCount = () => {
    setCount(count - 1);
  };

  const resetCount = () => {
    setCount(0);
  };

  return (
    <>
      <div>
        <button onClick={minusCount} className="btn">
          -
        </button>
        Count : {count}
        <button onClick={plusCount} className="btn">
          +
        </button>
      </div>

      <div>
        <button onClick={resetCount} className="btn">
          Reset
        </button>
      </div>
    </>
  );
};

export default App;
