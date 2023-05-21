import Counter from "./Counter";
import CounterProvider from "./CounterContext";
import "./styles.css";

export default function App() {
  return (
    <CounterProvider>
      <Counter />
    </CounterProvider>
  );
}
