import { useState } from "react";

function StudentForm({ addStudent }) {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function handleSubmit(e) {

    e.preventDefault();

    const student = {

      id: Date.now(),

      name,

      email

    };

    addStudent(student);

    setName("");

    setEmail("");

  }

  return (

    <form onSubmit={handleSubmit}>

      <input

        type="text"

        placeholder="Enter Name"

        value={name}

        onChange={(e) => setName(e.target.value)}

      />

      <br />

      <input

        type="email"

        placeholder="Enter Email"

        value={email}

        onChange={(e) => setEmail(e.target.value)}

      />

      <br />

      <button>Add Student</button>

    </form>

  );

}

export default StudentForm;