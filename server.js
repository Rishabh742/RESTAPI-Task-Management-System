
Step 8: Setup Server

       📄 server.js

       require("dotenv").config();

       const express = require("express");

       const connectDB = require("./config/db");

       const authRoutes = require("./routes/authRoutes");

       const taskRoutes = require("./routes/taskRoutes");

       const app = express();

       connectDB();

       app.use(express.json());

       app.use("/auth", authRoutes);

       app.use("/tasks", taskRoutes);

       app.listen(5000, () => console.log("Server running on port 5000"));
