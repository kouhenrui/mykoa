// Import required modules
import Koa from 'koa';
import knex from 'knex';
const Redis = require('ioredis')
import {mysqlConfig,redisConfig} from './src/config/index'
import {appRouter} from './src/module/app'
import adminRouter from './src/module/admin'
import {coreMiddleware,errhandle} from './src/middleware/index'
import bodyParser from 'koa-bodyparser';
import cors from '@koa/cors';
// Create a new Koa app
const app = new Koa();
// // Create Knex instance
const knexInstance = knex(mysqlConfig);

// Create Redis client
 const redisClient =new Redis(redisConfig) //redis.createClient(redisConfig);

// Attach the Knex instance and Redis client to the Koa context
app.context.knex = knexInstance;
app.context.redis = redisClient;

app.use(cors());
app.use(bodyParser());
app.use(coreMiddleware)
app.use(errhandle);
// app.use(bodyParser());
// Define routes and middleware using TypeScript syntax
app.use(appRouter.routes())
app.use(adminRouter.routes())
// Start the server
const port = 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});


