import {useReducer} from "react";

const Reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      throw new Error("Unhandled action type");
  }
};

function Counter() {
  const [state, dispatch] = useReducer(Reducer, { count: 0 });

  return (
    <div>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: "INCREMENT" })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>
        Decrement
      </button>
    </div>
  );
};

export default Counter;