import { useEffect, useState } from "react";
import api from "./services/api";

function App() {

  const [users, setUsers] = useState([]);

  useEffect(() => {

    async function fetchUsers() {

      try {

        const response = await api.get("/users");

        setUsers(response.data);

      } catch (error) {

        console.log(error);

      }

    }

    fetchUsers();

  }, []);

  return (

    <div>

      <h1>Axios GET Example</h1>
      <h2>Users List</h2>

      {

        users.map((user) => (

          <div
            key={user.id}
            style={{
              border: "1px solid black",
              padding: "10px",
              margin: "10px",
            }}
          >

            <h3>{user.name}</h3>

            <p>Email : {user.email}</p>

            <p>Phone : {user.phone}</p>

            <p>Company : {user.company.name}</p>

          </div>

        ))

      }

    </div>

  );

}

export default App;