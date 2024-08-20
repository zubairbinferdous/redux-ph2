import React from "react";
import ChildComponent from "./ChildComponent";

const FunctionComponent = ({ count, setCount }) => {
  return (
    <div className="border1">
      <button onClick={() => setCount(count + 1)}>
        {" "}
        function class {count}
      </button>

      <ChildComponent count={count}></ChildComponent>
    </div>
  );
};

export default FunctionComponent;
