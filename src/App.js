import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState, useCallback } from "react";

function App() {
  const [input, setInput] = useState("");
  const [count, setCount] = useState(0);

  const increamentCount = useCallback(() => {
    setCount(count + 1);
  },[count]);

  return (
    <div className="App">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />
      <button onClick={increamentCount}>increament Counter</button>
      <h3>Input text : {input}</h3>
      <h3>Count : {count}</h3>
      <ChildComponent onClick={increamentCount} />
    </div>
  );
}
const ChildComponent = React.memo(function ({ count,onClick }) {
  console.log("Child Component Rendered");
  return (
    <div>
      <h1>Child Component</h1>
      <button onClick={onClick}>Click</button>
      <h3>Count : {count}</h3>
    </div>
  );
});

export default App;
