import StudentCard from "./StudentCard";

function StudentList({ students, setEditingStudent }) {

  return (

    <div>

      {

        students.map((student) => (

          <StudentCard
            key={student.id}
            student={student}
            setEditingStudent={setEditingStudent}
          />

        ))

      }

    </div>

  );

}

export default StudentList;