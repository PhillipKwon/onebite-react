import { useState } from "react";
import "./App.css";
import Controller from "./components/Controller";
import Viewer from "./components/Viewer";

function App() {
  const [count, setCount] = useState(0);

  const setCountWithValue = (v) => {
    setCount(count + v);
  };

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
        <Viewer count={count} />
      </section>
      <section>
        <Controller setCount={setCountWithValue} />
      </section>
    </div>
  );
}

export default App;
