const mysqlConfig = {
    host: 'localhost',
    user: 'student',
    password: 'student',
    database: 'agents'
};

const pgsqlConfig = 'postgres://student:student@localhost:5432/heyagent'

module.exports = { mysqlConfig, pgsqlConfig };