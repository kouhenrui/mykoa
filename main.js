"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// Import required modules
const koa_1 = __importDefault(require("koa"));
const knex_1 = __importDefault(require("knex"));
const Redis = require('ioredis');
const index_1 = require("./src/config/index");
const app_1 = require("./src/module/app");
const admin_1 = __importDefault(require("./src/module/admin"));
const index_2 = require("./src/middleware/index");
const koa_bodyparser_1 = __importDefault(require("koa-bodyparser"));
const cors_1 = __importDefault(require("@koa/cors"));
// Create a new Koa app
const app = new koa_1.default();
// // Create Knex instance
const knexInstance = (0, knex_1.default)(index_1.mysqlConfig);
// Create Redis client
const redisClient = new Redis(index_1.redisConfig); //redis.createClient(redisConfig);
// Attach the Knex instance and Redis client to the Koa context
app.context.knex = knexInstance;
app.context.redis = redisClient;
app.use((0, cors_1.default)());
app.use((0, koa_bodyparser_1.default)());
app.use(index_2.coreMiddleware);
app.use(index_2.errhandle);
// app.use(bodyParser());
// Define routes and middleware using TypeScript syntax
app.use(app_1.appRouter.routes());
app.use(admin_1.default.routes());
// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server started on port ${port}`);
});
//# sourceMappingURL=main.js.map