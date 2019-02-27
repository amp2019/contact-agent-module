  DROP DATABASE IF EXISTS agents;
  CREATE DATABASE IF NOT EXISTS agents;
  USE agents;

CREATE TABLE listedAgent (
  id INT AUTO_INCREMENT,
  houseId INT,
  name VARCHAR(100),
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
);