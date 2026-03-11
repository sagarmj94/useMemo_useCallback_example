import { useMemo, useState } from "react";
import "./useMemo.css";

const UseMemoAnduseCallback = () => {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);

  const squareValue = useMemo(() => {
    console.log("Expensive Calculation...");
    return counter * counter;
  }, [counter]);

  return (
    <div className="container">
      <h1 className="title">useMemo Hook Example</h1>

      <div className="example">
        <h3 className="counter-green">Square Counter: {squareValue}</h3>

        <button
          className="btn-increment"
          onClick={() => setCounter(counter + 1)}
        >
          Increment
        </button>

        <h3 className="counter-red">Counter2: {counter2}</h3>

        <button
          className="btn-decrement"
          onClick={() => setCounter2(counter2 - 1)}
        >
          Decrement
        </button>
      </div>

      {/* Question 1 */}
      <h2 className="question">Question 1: What is useMemo in React?</h2>

      <p className="answer">
        It is a hook used to memorize the result of a function and cache it,
        recalculating it only if the dependencies change.
      </p>

      {/* Question 2 */}
      <h2 className="question">
        Question 2: When should you use useMemo hook?
      </h2>

      <p className="answer">
        When computing value is expensive or time consuming.
      </p>
      <p className="answer">
        When you want to prevent unnecessary re-computation of values across
        re-renders.
      </p>
      <p className="answer">
        useMemo hoo does not return a function it will return a{" "}
        <span className="highlight"> memorized value.</span>
      </p>

      <h2 className="question">
        Question 3: How does useMemo differ from useState?
      </h2>
      <p className="answer">
        useMmo memorizes a computed value and returns the cached value without
        causing re-renders, while useState manages state and triggeres
        re-renders when the state changes.
      </p>
    </div>
  );
};

export default UseMemoAnduseCallback;
