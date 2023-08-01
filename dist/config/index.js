"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.redisConfig = exports.mysqlConfig = void 0;
const mysqlConfig = {
    client: 'mysql2',
    connection: {
        host: '192.168.245.33',
        user: 'root',
        password: '123456',
        database: 'test',
    },
};
exports.mysqlConfig = mysqlConfig;
const redisConfig = {
    host: '192.168.245.33',
    port: 6379,
    // password: 'your_redis_password', // Redis server password (if set)
    db: 0, // Redis database number (0 to 15)
};
exports.redisConfig = redisConfig;
//# sourceMappingURL=index.js.map