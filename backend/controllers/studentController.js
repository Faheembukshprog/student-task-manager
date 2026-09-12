const Student = require("../models/Student");

const getStudents = async (req, res) => {
  try {
    const students = await Student.find();

    res.json(students);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch students",
      error: error.message,
    });
  }
};

const getStudentById = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id);

    if (!student) {
      return res.status(404).json({
        message: "Student not found",
      });
    }

    res.json(student);
  } catch (error) {
    res.status(500).json({
      message: "Failed to fetch student",
      error: error.message,
    });
  }
};

const createStudent = async (req, res) => {
  try {
    const student = await Student.create(req.body);

    res.status(201).json(student);
  } catch (error) {
    res.status(400).json({
      message: "Failed to create student",
      error: error.message,
    });
  }
};

module.exports = {
  getStudents,
  getStudentById,
  createStudent,
};
