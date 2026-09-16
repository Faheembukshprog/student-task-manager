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

const updateStudent = async (req, res) => {
  try {
    const student = await Student.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!student) {
      return res.status(404).json({
        message: "Student not found",
      });
    }

    res.json(student);
  } catch (error) {
    res.status(400).json({
      message: "Failed to update student",
      error: error.message,
    });
  }
};

const deleteStudent = async (req, res) => {
  try {
    const student = await Student.findByIdAndDelete(req.params.id);

    if (!student) {
      return res.status(404).json({
        message: "Student not found",
      });
    }

    res.json({
      message: "Student deleted successfully",
    });
  } catch (error) {
    res.status(500).json({
      message: "Failed to delete student",
      error: error.message,
    });
  }
};

const searchStudents = async (req, res) => {
  try {
    const { minAge, course, status } = req.query;

    const conditions = [];

    if (minAge) {
      conditions.push({ age: { $gte: Number(minAge) } });
    }

    if (course) {
      conditions.push({ course: course });
    }

    if (status) {
      conditions.push({ status: status });
    }

    const filter = conditions.length > 0 ? { $and: conditions } : {};

    const students = await Student.find(filter);

    res.json(students);
  } catch (error) {
    res.status(500).json({
      message: "Search failed",
      error: error.message,
    });
  }
};

const getStudentStats = async (req, res) => {
  try {
    const stats = await Studnet.aggregate([
      {
        $group: {
          _id: "$course",
          totalStudents: { $sum: 1 },
          avgAge: { $age: "age" },
        },
      },
      {
        $sort: {
          totalStudents: -1,
        },
      },
    ]);

    res.json(stats);
  } catch (error) {
    res.status(500).json({
      message: "Failed to generate student statistics",
      error: error.message,
    });
  }
};

module.exports = {
  getStudents,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudent,
  searchStudents,
  getStudentStats,
};
