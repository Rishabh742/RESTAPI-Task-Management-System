
Step 4: Define MongoDB Models

       We define schemas for users and tasks.

       📄 models/user.js
 
        const mongoose = require("mongoose");

        const UserSchema = new mongoose.Schema({
  
		username: { type: String, required: true, unique: true },
  
		password: { type: String, required: true },
         });

        module.exports = mongoose.model("User", UserSchema);


        const mongoose = require("mongoose");

        const TaskSchema = new mongoose.Schema({
  
		title: String,
  
		description: String,
  
		status: { type: String, enum: ["pending", "completed"], default: "pending" },
  
		priority: { type: String, enum: ["low", "medium", "high"], default: "medium" },
  
		createdAt: { type: Date, default: Date.now },
         });

      module.exports = mongoose.model("Task", TaskSchema);

