import { useSelector, useDispatch } from "react-redux";

import { increment, decrement, incrementByAmount } from "../features/counter/counterSlice";

function Counter() {
  // Selector reads
  const count = useSelector((state) => state.counter.value);
  //dispatch sends out actions
  const dispatch = useDispatch();
  return (
    <div>
      <h1>Counter</h1>
      <div>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <span>{count}</span>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <br />
        <button onClick={() => dispatch(incrementByAmount(5))}>Increment By: 5</button>
      </div>
    </div>
  );
}

export default Counter;
