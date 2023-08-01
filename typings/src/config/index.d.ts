declare const mysqlConfig: {
    client: string;
    connection: {
        host: string;
        user: string;
        password: string;
        database: string;
    };
};
declare const redisConfig: {
    host: string;
    port: number;
    db: number;
};
export { mysqlConfig, redisConfig };
