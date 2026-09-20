import StudentCard from "../components/StudentCard";
import { useAppContext } from "../context/AppContext";

function Students() {
  const { students, loading, error } = useAppContext();

  if (loading) {
    return <p>Loading students...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <h1>Students</h1>

      {students.map((student) => (
        <StudentCard key={student._id} student={student} />
      ))}
    </div>
  );
}

export default Students;
