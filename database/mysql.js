const mysql = require('mysql');
const config = require('./config.js');

const connection = mysql.createConnection(config.mysqlConfig);
connection.connect();

const getListedAgent = (houseId, callback) => {
  connection.query(`SELECT * FROM listedAgent WHERE houseId=${houseId};`, (err, data) => {
    if (err) {
      console.log('RECEIVING LIST AGENT FAILED', err);
    } else {
      callback(err, data);
    }
  });
};

const random = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
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

const createAgent = (data, cb) => {
  let houseId = data.houseId ? data.houseId : null
  let name = data.name ? data.name : null
  let company = data.company ? data.company : null
  let phone = data.phone ? data.phone : null
  let url = data.url ? data.url : null
  let qString = `INSERT INTO listedAgent (houseId,name,company,phone,url) VALUES (${houseId},'${name}','${company}','${phone}','${url}');`
  
  connection.query(qString, (err, data) => {
    if (err) {
      if(err.errno == 1062 || err.errno == 1064){
        let errmsg = 'Duplicate name. Please use update. Mysql: ' + err;
        cb(errmsg)
      } 
      console.log('listedAgent Post FAILED. Err No: ', err.errno);
    } else {
      cb(data)
      console.log('post successful')
    }
  });
}

const getAgent = (data, cb) => {
  let qString =`SELECT * FROM listedAgent WHERE name='${data.name}';`
  connection.query(qString, (err, data) => {
    if (err) {
      console.log('listedAgent get FAILED', err);
    } else {
      cb(null,data)
      console.log('get successful')
    }
  });
}

const updateAgent = (data, cb) => {
  let houseId = data.houseId ? data.houseId : null
  let name = data.name //required
  let company = data.company ? data.company : null
  let phone = data.phone ? data.phone : null
  let url = data.url ? data.url : null
  let qString =`UPDATE listedAgent SET houseId = ${houseId}, company = '${company}', phone = '${phone}', url = '${url}' WHERE name = '${name}';`

  connection.query(qString, (err, data) => {
    if (err) {
      console.log('listedAgent Update FAILED', err);
    } else {
      cb(null,data)
      console.log('update successful')
    }
  });
}

const deleteAgent = (data, cb) => {
  let qString = ''
  if(data.houseId) {
    qString = `DELETE FROM listedAgent WHERE houseId = ${data.houseId};`;
  }
  if(data.name) {
    qString = `DELETE FROM listedAgent WHERE name = '${data.name}';`;
  }
  if(data.company) {
    qString = `DELETE FROM listedAgent WHERE company = '${data.company}';`;
  }

  connection.query(qString, (err, data) => {
    if (err) {
      console.log('listedAgent Delete FAILED', err);
    } else {
      cb(null,data)
      console.log('delete successful')
    }
  });
}

module.exports = { getListedAgent, getPremierAgents, createAgent, getAgent, updateAgent, deleteAgent };
