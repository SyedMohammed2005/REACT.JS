import { useState,useEffect } from 'react'

import './App.css'

function App() {
  const [user, setUser] = useState([]);
   const [loading, setLoading] = useState(true);
   useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then((response) => response.json())
    .then((data) => {
      setUser(data);
      setLoading(false);  

   },[])
})
return (
    loading
        ? <h1>Loading...</h1>
        : user.map((user) => (
            <h1 key={user.id}>{user.name}</h1>
        ))
);
}
export default App
