
Step 5: Authentication (Signup & Login)

       We implement JWT-based authentication.

       📄 middleware/auth.js

       const jwt = require("jsonwebtoken");

       const authenticate = (req, res, next) => {
  
		const token = req.header("Authorization");
  
		if (!token) return res.status(401).send("Access Denied");
  
		try {
    
			const verified = jwt.verify(token, process.env.SECRET_KEY);
    
			req.user = verified;
    
			next();
  
		} 

                catch (err) {
    
		res.status(400).send("Invalid Token");
  	          
	        }
	};

     module.exports = authenticate;

      📄 routes/authRoutes.js

        const express = require("express");

        const bcrypt = require("bcryptjs");

        const jwt = require("jsonwebtoken");

        const User = require("../models/user");

        const router = express.Router();

       // User Signup

        router.post("/signup", async (req, res) => {

        const hashedPassword = await bcrypt.hash(req.body.password, 10);

        const user = new User({ username: req.body.username, password: hashedPassword });

        await user.save();

        res.send("User registered");

      });

     // User Login

      router.post("/login", async (req, res) => {

      const user = await User.findOne({ username: req.body.username });

      if (!user || !(await bcrypt.compare(req.body.password, user.password))) {

            return res.status(400).send("Invalid credentials");
      }

     const token = jwt.sign({ _id: user._id }, process.env.SECRET_KEY);

     res.send({ token });
   });

  module.exports = router;

