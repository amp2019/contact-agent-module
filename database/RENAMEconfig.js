const mysqlConfig = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'agents'
};

const pgsqlConfig = 'postgres://USER:PASSWORD@HOST:PORT/db'
const mongoConfig = 'mongodb://localhost/amp'
const awsMongoConfig = 'mongodb://172.31.57.215/amp'

module.exports = { mysqlConfig, pgsqlConfig, mongoConfig, awsMongoConfig };