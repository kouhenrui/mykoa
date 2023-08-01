

const mysqlConfig={
  client: 'mysql2',
  connection: {
    host: '192.168.245.33',
    user: 'root',
    password: '123456',
    database: 'test',
  },
}

const redisConfig={
  host: '192.168.245.33', // Redis server host
    port: 6379, // Redis server port
    // password: 'your_redis_password', // Redis server password (if set)
    db: 0, // Redis database number (0 to 15)
}

export  {mysqlConfig,redisConfig};