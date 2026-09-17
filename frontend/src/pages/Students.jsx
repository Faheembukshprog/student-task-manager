import StudentCard from "../components/StudentCard";

function Students() {
  const students = [
    {
      id: 1,
      name: "Ali Khan",
      email: "ali@example.com",
      course: "ADSE",
      age: 20,
      status: "active",
    },
    {
      id: 2,
      name: "Sara Ahemad",
      course: "ADSE",
      age: 20,
      status: "active",
    },
  ];

  return (
    <div>
      <h1>Students</h1>

      {students.map((student) => (
        <StudentCard key={student.id} student={student} />
      ))}
    </div>
  );
}

export default Students;
