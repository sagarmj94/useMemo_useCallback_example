import { useMemo, useState } from "react";

const UseMemoAnduseCallback = () => {
  const [counter, setCounter] = useState(0);
  const [counter2, setCounter2] = useState(0);

  const squareValue = useMemo(() => {
    console.log("Expensive Calculation...");
    return counter * counter;
  }, [counter]);

  return (
    <>
      <div>
        <h3 style={{ textAlign: "center" }}>useMemoAnduseCallback</h3>
      </div>
      <h5
        style={{
          color: "#1E40AF",
          backgroundColor: "#DBEAFE",
          padding: "6px",
          borderRadius: "5px",
        }}
      >
        Question 1: What is useMemo in React?
      </h5>
      <h6
        style={{
          color: "#166534",
          backgroundColor: "#DCFCE7",
          padding: "6px",
          borderRadius: "5px",
        }}
      >
        -It is a hook used to memorize the result of a function and cache it,
        recalculating it only if the depedencies change.
      </h6>
      <h2
        style={{
          color: "#065F46",
          backgroundColor: "#ECFDF5",
          padding: "6px",
          borderRadius: "5px",
        }}
      >
        Square Counter: {squareValue}
      </h2>
      <button
        style={{
          backgroundColor: "#FEF3C7",
          color: "#92400E",
          padding: "8px 12px",
          borderRadius: "5px",
          border: "none",
          cursor: "pointer",
        }}
        onClick={() => setCounter(counter + 1)}
      >
        Increament
      </button>
      <h2
        style={{
          color: "#991B1B",
          backgroundColor: "#FEE2E2",
          padding: "6px",
          borderRadius: "5px",
        }}
      >
        deSquare Counter2: {counter2}
      </h2>
      <button
        style={{
          backgroundColor: "#FEE2E2",
          color: "#991B1B",
          padding: "8px 12px",
          borderRadius: "5px",
          border: "none",
          cursor: "pointer",
        }}
        onClick={() => setCounter2(counter2 - 1)}
      >
        Decreament
      </button>

      <h5
        style={{
          color: "#1E40AF",
          backgroundColor: "#DBEAFE",
          padding: "6px",
          borderRadius: "5px",
          marginTop: "15px",
        }}
      >
        Question 2:When should you use useMemo hook?
      </h5>
      <h6
        style={{
          color: "#166534",
          backgroundColor: "#DCFCE7",
          padding: "6px",
          borderRadius: "5px",
        }}
      >
        When computingvalue is expensive or time consuming.
      </h6>
    </>
  );
};

export default UseMemoAnduseCallback;
