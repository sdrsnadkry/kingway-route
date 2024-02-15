import { useState } from "react";

export default function Child() {
  const [sum, setSum] = useState(0);
  const [first, setFirst] = useState(0);
  const [second, setSecond] = useState(0);

  // sum state
  function calculateSum() {
    setSum(Number(first) + Number(second));
  }

  function setValueForFirstItem(event) {
    setFirst(event.target.value);
  }

  function setValueForSecondItem(event) {
    setSecond(event.target.value);
  }

  return (
    <div>
      <div>
        <label htmlFor="first">Enter Number 1</label>
        <input
          id="first"
          name="first"
          type="number"
          value={first}
          onChange={setValueForFirstItem}
        />
      </div>
      <div>
        <label htmlFor="second">Enter Number 2</label>
        <input
          id="second"
          name="second"
          type="number"
          value={second}
          onChange={setValueForSecondItem}
        />
      </div>
      <button onClick={() => calculateSum()}>Add</button>
      <h1>sum - {sum}</h1>
    </div>
  );
}
