import { useState, useEffect } from "react";


function StudentForm({
  addStudent,
  editingStudent,
  updateStudent,
}) {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {

    if (editingStudent) {

      setName(editingStudent.name);
      setEmail(editingStudent.email);

    }

  }, [editingStudent]);

  async function handleSubmit(e) {

    e.preventDefault();

    if (editingStudent) {

      updateStudent({
        id: editingStudent.id,
        name,
        email,
      });

    } else {

      addStudent({
        id: Date.now(),
        name,
        email,
      });

    }

    setName("");
    setEmail("");

  }

  return (

    <form onSubmit={handleSubmit}>

      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />

      <br />

      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
      />

      <br />

      <button>

        {editingStudent ? "Update Student" : "Add Student"}

      </button>

    </form>

  );
}

export default StudentForm;