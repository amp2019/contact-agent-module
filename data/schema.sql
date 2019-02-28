  DROP DATABASE IF EXISTS agents;
  CREATE DATABASE IF NOT EXISTS agents;
  USE agents;

CREATE TABLE listedAgent (
  id INT AUTO_INCREMENT,
  houseId INT,
  agentId INT UNIQUE NOT NULL,
  name VARCHAR(100),
  premier tinyint not null default 0,
  company VARCHAR(100),
  reviews INT,
  recentSales INT,
  phone VARCHAR(15),
  url VARCHAR(500),
  PRIMARY KEY (id)
);

CREATE TABLE messages (
  id INT AUTO_INCREMENT,
  yourname VARCHAR(100),
  phone VARCHAR(15),
  email VARCHAR(50),
  note VARCHAR(1000)
  PRIMARY KEY (id)
);