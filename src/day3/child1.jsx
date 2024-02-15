import Child2 from "./child2";

function Child1(props) {
  return (
    <div>
      <h1>Child1</h1>
      <Child2 increment={props.increment} />
    </div>
  );
}

export default Child1;
