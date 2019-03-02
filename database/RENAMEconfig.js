const mysqlConfig = {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'agents'
};

const pgsqlConfig = 'postgres://USER:PASSWORD@HOST:PORT/db'
//example const pgsqlConfig = 'postgres://jonathan:secret@localhost:5432/heyagent'

module.exports = { mysqlConfig, pgsqlConfig };