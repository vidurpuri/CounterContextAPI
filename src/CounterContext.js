import { React, createContext, useContext, useState } from "react";

const CounterContext = createContext();

const CounterProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const Increment = () => {
    setCount(count + 1);
  };

  const Decrement = () => {
    setCount(count - 1);
  };

  return (
    <CounterContext.Provider value={{ count, Increment, Decrement }}>
      {children}
    </CounterContext.Provider>
  );
};

export const useCounterCOntext = () => useContext(CounterContext);

export default CounterProvider;
