const express = require("express");

const {
  getStudents,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudent,
  searchStudents,
  getStudentStats,
} = require("../controllers/studentController");

const router = express.Router();

router.get("/", getStudents);
router.get("/search/filter", searchStudents);
router.get("/stats", getStudentStats);
router.get("/:id", getStudentById);
router.post("/", createStudent);
router.put("/:id", updateStudent);
router.delete("/:id", deleteStudent);

module.exports = router;
