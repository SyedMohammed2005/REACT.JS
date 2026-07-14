function StudentCard({ student }) {

  return (

    <div>

      <h3>{student.name}</h3>

      <p>{student.email}</p>

      <button>Edit</button>

      <button>Delete</button>

    </div>

  );

}

export default StudentCard;