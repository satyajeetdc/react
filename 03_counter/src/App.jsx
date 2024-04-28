import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);

  const increaseValue = () => {
    if (counter < 20) {
      setCounter(counter + 1);
    }
  };

  const decreaseValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <h1>Welcome to react</h1>
      <h2>Counter value: {counter}</h2>
      <button onClick={increaseValue}>Increase Counter</button>
      &nbsp; &nbsp; &nbsp; &nbsp;
      <button onClick={decreaseValue}>Decrease Counter</button>
    </>
  );
}

export default App;
