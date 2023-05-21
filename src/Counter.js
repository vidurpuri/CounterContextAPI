import { Fragment, React } from "react";
import { useCounterCOntext } from "./CounterContext";

const Counter = () => {
  const { count, Increment, Decrement } = useCounterCOntext();
  return (
    <Fragment>
      <h2>{count}</h2>
      <span>
        <button type="submit" onClick={() => Increment()}>
          Increase
        </button>
        <button type="submit" onClick={() => Decrement()}>
          Decrease
        </button>
      </span>
    </Fragment>
  );
};

export default Counter;
