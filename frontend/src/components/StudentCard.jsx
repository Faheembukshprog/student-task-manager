function StudentCard({ student }) {
    return (
        <div className="student-card">
            <h3>{student.name}</h3>
            <p>Email: {student.email}</p>
            <p>Course: {student.course}</p>
            <p>Age: {student.age}</p>
            <p>Status: {student.status}</p>
        </div>
    );
}

export default StudentCard;