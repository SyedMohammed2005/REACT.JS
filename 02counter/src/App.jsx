import { useState } from 'react'
import './App.css'

function App() {

  const [counter, setCounter] = useState(0)

  const addValue = () => {
    setCounter(counter + 1)
    if (counter >= 20) {
      setCounter(20)
    }
  }

  const removeValue = () => {
    if(counter > 0){
      setCounter(counter - 1)
    }
  }

  return (
    <>
      <h1>React App</h1>

      <h2>Counter value: {counter}</h2>
<span>
      <button onClick={addValue} padding={10} >
        Add value
      </button>

      <br /><br />

      <button onClick={removeValue}>
        Remove value
      </button>
      </span>
    </>
  )
}

export default App