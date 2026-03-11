import { useCallback, useState } from "react";
import UseCallbackChild from "./component/UseCallbackChild.jsx";

const UseCallbackPage = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  const increment = useCallback(() => {
    console.log("Function recreated parent ");
    setCount((prev) => prev + 1);
  }, []);

  return (
    <div>
      <h2>Counter: {count}</h2>
      <button className="btn-increment" onClick={increment}>
        Increment
      </button>

      <h2 className="counter-red">Counter2: {count2}</h2>
      <button className="btn-increment" onClick={() => setCount2(count2 + 1)}>
        Increment Counter2
      </button>

      <UseCallbackChild increment={increment} />

      {/* Question 1 */}
      <h2 className="question">Question 1: What is useCallback in React?</h2>

      <p className="answer">
        useCallback is a React hook that memorizes a function and returns the
        same function reference unless its dependencies change.
      </p>

      {/* Question 2 */}
      <h2 className="question">
        Question 2: When should you use useCallback hook?
      </h2>

      <p className="answer">
        When you want to prevent unnecessary re-creation of functions during
        component re-renders.
      </p>

      <p className="answer">
        When passing functions as props to child components to avoid unnecessary
        child component re-renders.
      </p>

      <p className="answer">
        useCallback hook returns a{" "}
        <span className="highlight"> memorized function.</span>
      </p>

      {/* Question 3 */}
      <h2 className="question">
        Question 3: How does useCallback differ from useMemo?
      </h2>

      <p className="answer">
        useCallback memorizes a function reference, while useMemo memorizes the
        result of a computation.
      </p>

      <p className="answer">
        In simple terms,{" "}
        <span className="highlight">useMemo returns a value</span> and{" "}
        <span className="highlight">useCallback returns a function.</span>
      </p>
    </div>
  );
};

export default UseCallbackPage;
