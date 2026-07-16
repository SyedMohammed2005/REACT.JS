import { useState } from "react";
import Child from "./Child";

function App() {

    const [count, setCount] = useState(0);

    const [name] = useState("Syed");

    return (

        <div>

            <h1>Parent Component</h1>

            <h2>Count : {count}</h2>

            <button
                onClick={() => setCount(count + 1)}
            >
                Increment
            </button>

            <Child
                name={name}
            />

        </div>

    );

}

export default App;