import { useState, useEffect } from "react";
import "./App.css";
import Controller from "./components/Controller";
import Viewer from "./components/Viewer";

function App() {
  const [count, setCount] = useState(0);
  const [input, setInput] = useState("");

  const setCountWithValue = (v) => {
    setCount(count + v);
  };

  useEffect(() => {
    console.log("Use Effect2");
  }, [count]);

  useEffect(() => {
    console.log("Update");
  });

  return (
    <div className="app">
      <h1>Simple Counter</h1>
      <button
        onClick={() => {
          setCount(0);
        }}
      >
        초기화
      </button>
      <section>
        <input
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
          }}
        />
      </section>
      <section>
        <Viewer count={count} />
      </section>
      <section>
        <Controller setCount={setCountWithValue} />
      </section>
    </div>
  );
}

export default App;
