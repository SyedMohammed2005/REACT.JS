import { useCallback, useState } from "react";

function App() {

    const [count, setCount] = useState(0);

    const [name, setName] = useState("");

    const sayHello = useCallback(() => {

        console.log("Hello");

    }, []);

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

            <br /><br />

            <button onClick={sayHello}>
                Say Hello
            </button>

        </div>

    );

}

export default App;