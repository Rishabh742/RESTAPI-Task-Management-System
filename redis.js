
Step 3: Setup Redis Caching

       We use Redis for caching tasks to reduce database load.

       📄 config/redis.js

         const redis = require("redis");

	 const { promisify } = require("util");

	 const redisClient = redis.createClient();

	 const getAsync = promisify(redisClient.get).bind(redisClient);

	 const setAsync = promisify(redisClient.set).bind(redisClient);

         module.exports = { redisClient, getAsync, setAsync };
