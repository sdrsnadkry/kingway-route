import { useState } from "react";

export default function Child() {
  const [sum, setSum] = useState(0);

  // sum state
  function calculateStm(a,b) {
    //save sum in state
    setSum(a+b);
  }
  function increment() {
    setSum(sum + 1);
  }

  return (
    <div>
      <h1>sum - {sum}</h1>
      <button onClick={() => calculateStm(2,2)}>Click</button>
    </div>
  );
}
