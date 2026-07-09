import { useState, useRef } from "react";

function App() {
  // Stores the current count (causes re-render)
  const [count, setCount] = useState(0);

  // Stores the previous count (does NOT cause re-render)
  const previousRef = useRef();

  function increase() {
    // Save the current count before updating it
     setCount(count + 1);
    previousRef.current = count;

    // Update the current count
   
  }

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Current Count: {count}</h1>

      <h2>Previous Count: {previousRef.current}</h2>

      <button onClick={increase}>Increase</button>
    </div>
  );
}

export default App;