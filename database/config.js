const mysqlConfig = {
    host: 'localhost',
    user: 'student',
    password: 'student',
    database: 'agents'
};

const pgsqlConfig = 'postgres://student:student@localhost:5432/heyagent'
const mongoConfig = 'mongodb://localhost/amp'
const awsMongoConfig = 'mongodb://172.31.57.215/amp'

module.exports = { mysqlConfig, pgsqlConfig, mongoConfig };