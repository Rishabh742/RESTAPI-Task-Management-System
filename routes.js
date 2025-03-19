
Step 6: Task Management API

       We add CRUD operations with pagination, filtering, and caching.

       📄 routes/taskRoutes.js

         const express = require("express");

	 const Task = require("../models/task");

	 const { redisClient, getAsync, setAsync } = require("../config/redis");

	 const authenticate = require("../middleware/auth");

	 const router = express.Router();

	// Create Task

	router.post("/", authenticate, async (req, res) => {
  
	const task = new Task(req.body);
  
	await task.save();
  
	redisClient.del("tasks"); // Clear cache
  
	res.send(task);
    });


	// Get Tasks with Pagination & Filtering

	router.get("/", authenticate, async (req, res) => {
  
	const { status, priority, page = 1, limit = 5 } = req.query;
  
	let tasks = await getAsync("tasks");

  	if (!tasks) {
    
		const filter = {};
    
		if (status) filter.status = status;
    
		if (priority) filter.priority = priority;

    	tasks = await Task.find(filter)
      
	.sort({ priority: -1, createdAt: 1 })
      
	.skip((page - 1) * limit)
      
	.limit(Number(limit));
    
	await setAsync("tasks", JSON.stringify(tasks), "EX", 60);
  
	} else {
    
		tasks = JSON.parse(tasks);
  	  }
  
	res.send(tasks);
      });

	// Update Task

	router.put("/:id", authenticate, async (req, res) => {
  
	const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
  
	redisClient.del("tasks");
  
	res.send(task);
      });

	// Delete Task

	router.delete("/:id", authenticate, async (req, res) => {
  
	await Task.findByIdAndDelete(req.params.id);
  
	redisClient.del("tasks");
  
	res.send("Task deleted");
      });

     module.exports = router;
