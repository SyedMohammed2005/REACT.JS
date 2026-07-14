import { useState } from "react";
import StudentForm from "./components/StudentForm";
import StudentList from "./components/StudentList";
import api from "./services/api";
function App() {

  const [students, setStudents] = useState([]);
  const [editingStudent, setEditingStudent] = useState(null);

 async function addStudent(student){

   try{

      const response = await api.post(
         "/students",
         student
      );

      setStudents([
         ...students,
         response.data
      ]);

   }catch(error){

      console.log(error);

   }

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