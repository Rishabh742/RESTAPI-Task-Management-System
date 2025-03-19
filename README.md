
Introduction

A REST API built with Node.js (Express) for managing tasks with JWT authentication, CRUD operations, pagination & filtering, Redis caching, and priority-based task sorting using a Min-Heap.

Features

(1) User Authentication (JWT-based)
(2) CRUD Operations (Create, Read, Update, Delete tasks)
(3) Pagination & Filtering (Filter by status & priority)
(4) Performance Optimization (Redis caching)
(5) Efficient Scheduling (Priority Queue using Min-Heap)

Tech Stack

(1) Node.js + Express.js

(2) MongoDB + Mongoose

(3) Redis (Caching)

(4) JWT (Authentication)

Project Structure

The project follows a modular structure for scalability and maintainability:

/task-manager-api
│── /src
│   │── /config        # Configuration files (DB, Redis, etc.)
│   │── /controllers   # API controllers for handling requests
│   │── /middleware    # Authentication & validation middlewares
│   │── /models        # Mongoose models (User, Task)
│   │── /routes        # Express routes
│   │── /services      # Business logic services
│   │── /utils         # Utility functions (Heap implementation, helpers)
│── .env              # Environment variables
│── server.js         # Entry point
│── package.json      # Dependencies & scripts

Installation & Setup

1. Clone the Repository

    git clone https://github.com/your-username/task-manager-api.git
    cd task-manager-api

2. Install Dependencies
    npm install

3. Configure Environment Variables

    Create a .env file and add:

      MONGO_URI=your_mongodb_uri
      SECRET_KEY=your_jwt_secret
      REDIS_URL=your_redis_url
      PORT=5000

4. Start the Server
      npm start

API Endpoints

(1) Authentication

  (a) Method

      Endpoint

  (b) Description

       Auth Required

  (c) POST

     /auth/signup

  (d) Register a new user

      No

(2) POST

    /auth/login

   (a) Login & get JWT token

     No

 Task Management

 (a) Method

      Endpoint

 (b) Description

      Auth Required

  (3) POST

      /tasks/

   (a) Create a new task
   
       No

   (4) GET

      /tasks/

     (a) Get tasks (pagination & filters)
     
        No

   (5) PUT

       /tasks/:id

      (a) Update a task

         No

    (6) DELETE

       /tasks/:id

       (a) Delete a task

          No

Pagination & Filtering

(a) Use query parameters for pagination:

    GET /tasks?page=1&limit=10

 (b) Filter tasks based on status and priority:

    GET /tasks?status=pending&priority=high

Caching with Redis

(1) Frequently accessed data (tasks list) is stored in Redis for quick retrieval.

(2) Implemented caching in GET /tasks/ to reduce database load.

(3) Priority Queue (Min-Heap) for Task Scheduling

(4) The system sorts tasks dynamically based on priority and timestamp.

(5) High-priority tasks are processed first using a Min-Heap (Priority Queue).

(6) Heap implementation in utils/heap.js ensures O(log n) insertion and deletion.

Testing

  Run tests using Jest:
      npm test

