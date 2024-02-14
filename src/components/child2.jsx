import React from "react";
import { Child3 } from "./child3";

const Child2 = (props) => {
  return (
    <div>
      <Child3 increment={props.increment} />
    </div>
  );
};

export default Child2;
