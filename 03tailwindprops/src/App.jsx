

import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
const myObj={
  username:"chaiaurcode",
  age:23
}

let newArr=[1,2,5]

  return (
    <>
      <h1 className="bg-green-400 text-white p-5 rounded-xl flex items-center justify-center margin-1">
        Tailwind CSS Test
      </h1>
      <div className="flex items-center justify-center mt-5">
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors duration-300"
          onClick={() => setCount(count + 1)}
        >
          Count is {count}
        </button>
      </div>
      <Card  username="chaiaurcode" btnText="Subscribe"/>
        <Card username="anotheruser " btnText="Follow"/>
    </>
  )
}

export default App