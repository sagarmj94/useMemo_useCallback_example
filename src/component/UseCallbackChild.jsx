import React from "react";

const UseCallbackChild = ({ increment }) => {
  console.log("UseCallbackChild Rendered");
  return (
    <div>
      <button className="btn-increment" onClick={increment}>
        Child Button
      </button>
    </div>
  );
};

export default React.memo(UseCallbackChild);
