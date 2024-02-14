import React from "react";
import { increment } from "../redux/slice/counterSlice";
import { useDispatch } from "react-redux";

export const Child3 = (props) => {

  const dispatch = useDispatch();
 
  const incrementCounter = () => {
    dispatch(increment(500));
  };

  return (
    <div>
      <button onClick={incrementCounter}>Increment</button>
    </div>
  );
};
