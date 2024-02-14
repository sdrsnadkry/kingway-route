import React from "react";
import Child2 from "./child2";

export const Child1 = (props) => {
  return (
    <div>
      <Child2 increment={props.increment} />
    </div>
  );
};
