import { useState } from "react";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";

function App() {

  const [students, setStudents] = useState([]);
  const [editingStudent, setEditingStudent] = useState(null);

  function addStudent(student) {
    setStudents([...students, student]);
  }

  function updateStudent(updatedStudent) {

    setStudents(
      students.map((student) =>
        student.id === updatedStudent.id ? updatedStudent : student
      )
    );

    setEditingStudent(null);
  }

  return (
    <div>

      <h1>Student Management System</h1>

      <StudentForm
        addStudent={addStudent}
        editingStudent={editingStudent}
        updateStudent={updateStudent}
      />

      <StudentList
        students={students}
        setEditingStudent={setEditingStudent}
      />

    </div>
  );
}

export default App;