
Step 1: Setup the Project
 
     Initialize a Node.js project:

	mkdir task-manager
	cd task-manager
	npm init -y

     Install dependencies:

	npm install express mongoose bcryptjs jsonwebtoken redis dotenv cors
	npm install --save-dev nodemon jest supertest

      Create the project structure:

	task-manager/
	├── models/
	│   ├── user.js
	│   ├── task.js
	├── routes/
	│   ├── authRoutes.js
	│   ├── taskRoutes.js
	├── middleware/
	│   ├── auth.js
	├── config/
	│   ├── db.js
	│   ├── redis.js
	├── tests/
	│   ├── task.test.js
	├── server.js
	├── package.json
	├── .env