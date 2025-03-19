
Step 2: Connect to MongoDB

      We set up MongoDB for storing users and tasks.

      📄 config/db.js

       const mongoose = require("mongoose");

       const connectDB = async () => {
       try {
    
		await mongoose.connect(process.env.MONGO_URI, {
      
		useNewUrlParser: true,
      
		useUnifiedTopology: true,
        });
    
	console.log("MongoDB Connected");
  
	} catch (err) {
    
		console.error(err);
    
		process.exit(1);
           }
       };

module.exports = connectDB;
