import axios from "axios";
import { useEffect, useState } from "react";

function Users() {

    const [users, setUsers] = useState([]);

    useEffect(() => {

        async function getUsers(){

            const response = await axios.get(
                "https://jsonplaceholder.typicode.com/users"
            );

            setUsers(response.data);

        }

        getUsers();

    }, []);

    return (

        <div>

            <h1>Users</h1>

            {

                users.map((user)=>(

                    <div key={user.id}>

                        <h2>{user.name}</h2>

                        <p>{user.email}</p>

                    </div>

                ))

            }

        </div>

    );

}

export default Users;