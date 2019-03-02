//FEC FILE
//figure out how to end the program running

const faker = require('faker');
const mysql = require('mysql');
const config = require('../config.js');

const connection = mysql.createConnection(config.mysqlConfig);

connection.connect();

const createData = () => {
  let i = 0;
  const iterator = () => {
    const lAgent = {
      houseId: i,
      name: faker.name.findName(),
      company: faker.company.companyName(),
      reviews: faker.random.number(100),
      recentSales: faker.random.number(80),
      phone: faker.phone.phoneNumberFormat(1),
      url: faker.image.avatar(),
    };
    const lQuery = `
    INSERT INTO listedAgent (houseId, name, company, reviews, recentSales, phone, url)
    VALUES (${lAgent.houseId}, "${lAgent.name}", "${lAgent.company}", ${lAgent.reviews}, ${lAgent.recentSales}, "${lAgent.phone}", "${lAgent.url}")
  `;
    connection.query(lQuery, (err, data) => {
      if (i === 100) { console.log('listed agents data entered') }
    });
    const pAgent = {
      name: faker.name.findName(),
      reviews: faker.random.number(100),
      recentSales: faker.random.number(80),
      phone: faker.phone.phoneNumberFormat(1),
      url: faker.image.avatar(),
    };
    const pQuery = `
      INSERT INTO premierAgents (name, reviews, recentSales, phone, url)
      VALUES ("${pAgent.name}", ${pAgent.reviews}, ${pAgent.recentSales}, "${pAgent.phone}", "${pAgent.url}")
    `;

    connection.query(pQuery, (err, data) => {
      if (i < 100) {
        i += 1;
        iterator();
      } else {
        console.log('Fake data inserted into DB');
        return;
      }
      if (err) {
        console.log('fake data insert FAILED', err);
        return;
      }
    });
  };

  connection.query(`
  DROP DATABASE IF EXISTS agents;
  CREATE DATABASE IF NOT EXISTS agents;

  USE agents;

  CREATE TABLE listedAgent (
    id INT AUTO_INCREMENT,
    houseId INT,
    name VARCHAR(100) UNIQUE NOT NULL,
    company VARCHAR(100),
    reviews INT,
    recentSales INT,
    phone VARCHAR(50),
    url VARCHAR(255),
    PRIMARY KEY (id)
    );

  CREATE TABLE premierAgents (
    id INT AUTO_INCREMENT,
    name VARCHAR(100),
    reviews INT,
    recentSales INT,
    phone VARCHAR(50),
    url VARCHAR(255),
    PRIMARY KEY (id)
    );`, (err, data) => { iterator(); });
    return;
};
createData();