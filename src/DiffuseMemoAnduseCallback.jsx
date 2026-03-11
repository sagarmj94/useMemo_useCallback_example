import { useCallback, useMemo, useState } from "react";

const DiffuseMemoAnduseCallback = () => {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(100);

  const squareValue = () => {
    console.log("Expensive Calculation...", counter2);
    return counter * counter;
  };

  //   const squaredValueUseMemo = useMemo(squareValue, [counter]);
  const squaredValueCallback = useCallback(squareValue, [counter]);

  return (
    <div>
      {/* <h2>Squared Counter: {squaredValueUseMemo}</h2> */}
      <h2>Squared Counter2: {squaredValueCallback()}</h2>
      <button className="btn-increment" onClick={() => setCounter(counter + 1)}>
        Increment
      </button>
      <h2>{counter2}</h2>
      <button
        className="btn-increment"
        onClick={() => setCounter2(counter2 - 1)}
      >
        Decrement counter 2
      </button>
    </div>
  );
};

export default DiffuseMemoAnduseCallback;
