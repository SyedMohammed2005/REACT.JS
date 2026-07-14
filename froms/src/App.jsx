import { useState } from "react";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";

function App() {

  const [students, setStudents] = useState([]);

  function addStudent(student) {

    setStudents([...students, student]);

  }

  return (

    <div>

      <h1>Student Management System</h1>

      <StudentForm addStudent={addStudent} />

      <StudentList students={students} />

    </div>

  );

}

export default App;