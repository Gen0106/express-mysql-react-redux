require('dotenv').config();

export default {
    client: process.env.DB_CLIENT,
    connection: {
        host: process.env.DB_HOST || '127.0.0.1',
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        charset: 'utf8',
        socketPath: process.env.SOCKET_PATH,
    },
    migrations: {
        tableName: 'migrations',
        directory: process.cwd() + '/server/migrations',
    },
    debug: true
};

export const testDdatabase = {
    client: process.env.TEST_DB_CLIENT,
    connection: {
        host: process.env.TEST_DB_HOST || '127.0.0.1',
        user: process.env.TEST_DB_USER,
        password: process.env.TEST_DB_PASSWORD,
        database: process.env.TEST_DB_NAME,
        charset: 'utf8',
        socketPath: process.env.SOCKET_PATH,
    },
    debug: true
};