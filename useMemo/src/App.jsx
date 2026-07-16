import { useMemo, useState } from "react";

function App() {

  const [count, setCount] = useState(0);
  const [name, setName] = useState("");

  function expensiveCalculation() {

    console.log("Calculating...");

    let total = 0;

    for (let i = 0; i < 100000000; i++) {
      total += i;
    }

    return total;
  }

  const result = useMemo(() => {

    return expensiveCalculation();

  }, [count]);

  return (
    <div>

      <h2>Count : {count}</h2>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>

      <br /><br />

      <input
        type="text"
        placeholder="Enter Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <h3>Name : {name}</h3>

      <h3>Result : {result}</h3>

    </div>
  );

}

export default App;