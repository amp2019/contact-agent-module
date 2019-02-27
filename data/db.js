const mysql = require('mysql');

const connection = mysql.createConnection({
  //host: '',
  user: 'student',
  password: 'student',
  database: 'agents',
});

const random = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

connection.connect();

const getListedAgent = (houseId, callback) => {
  connection.query(`SELECT * FROM listedAgent WHERE houseId = ${houseId}`, (err, data) => {
    if (err) {
      console.log('RECEIVING LIST AGENT FAILED', err);
    } else {
      callback(err, data);
    }
  });
};

const getPremierAgents = (callback) => {
  connection.query('SELECT * FROM premierAgents', (err, data) => {
    if (err) {
      console.log('RETREVING PREMIER AGENTS FAILED', err);
    } else {
      //selects 3 random premier agents from the list of 100
      const selected = [data[random(0, 33)], data[random(34, 66)], data[random(67, 100)]];
      callback(err, selected);
    }
  });
};

module.exports = { getListedAgent, getPremierAgents };
