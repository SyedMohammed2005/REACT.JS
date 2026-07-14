function StudentCard({
  student,
  setEditingStudent,
}) {

  return (

    <div>

      <h3>{student.name}</h3>

      <p>{student.email}</p>

      <button
        onClick={() => setEditingStudent(student)}
      >
        Edit
      </button>

    </div>

  );

}

export default StudentCard;