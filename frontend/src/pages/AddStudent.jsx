import { useState } from "react";
import axios from "axios";

function AddStudent() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    course: "",
    age: "",
    status: "active",
  });

  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      await axios.post("http://localhost:5000/api/students", {
        ...formData,
        age: Number(formData.age),
      });

      setMessage("Student added successfully.");

      setFormData({
        name: "",
        email: "",
        course: "",
        age: "",
        status: "active",
      });
    } catch (error) {
      setMessage("Failed to add student");
      console.error(error);
    }
  };

  return (
    <div>
      <h1>Add Student</h1>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Name</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div>
          <label>Course</label>
          <input
            type="text"
            name="course"
            value={formData.course}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Age</label>
          <input
            type="number"
            name="age"
            value={formData.age}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Status</label>
          <select name="status" value={formData.status} onChange={handleChange}>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>
        </div>

        <button type="submit">
            Add Student
        </button>

        {message && <p>{message}</p>}
      </form>
    </div>
  );
}
