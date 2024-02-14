import React, { useState } from "react";
import { Child1 } from "./child1";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const [count, setCount] = useState(0);

  const countValue = useSelector((state) => state.counterReducer.count);

  // const dispatch = useDispatch();

  console.log(countValue, "store");

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <div>
      Counter = {countValue}
      <Child1 increment={increment} />
    </div>
  );
};

export default Header;
