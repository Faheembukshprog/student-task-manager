import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Students from "./pages/Students";

function Home() {
  return (
    <div>
      <h1>Student Task Manager</h1>
      <p>Welcome to the student management system.</p>
    </div>
  );
}

function AddStudent() {
  return (
    <div>
      <h1>Add Student</h1>
      <p>Student form will be added next.</p>
    </div>
  );
}

function StudentDetails() {
  return (
    <div>
      <h1>Student Details</h1>
      <p>Student details will be loaded here.</p>
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/"></Link>
        {" | "}
        <Link to="/students">Students</Link>
        {" | "}
        <Link to="/students/add">Add Student</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="/students">
          <Route index element={<Students />} />
          <Route path="add" element={<AddStudent />} />
          <Route path=":id" element={<StudentDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
