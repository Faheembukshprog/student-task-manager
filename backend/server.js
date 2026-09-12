const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

const studentRoutes = require("./routes/studentRoutes");

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/students/", studentRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "Student Task Manager API is running",
  });
});

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    console.log("MongoDB connected successfully");

    const PORT = process.env.PORT || 5000;

    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("MongoDB connection failed:", error.message);
  });
