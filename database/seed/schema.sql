  DROP DATABASE IF EXISTS heyAgent;
  CREATE DATABASE IF NOT EXISTS heyAgent;
  USE heyAgent;

CREATE TABLE listedAgent (
  id INT AUTO_INCREMENT,
  name VARCHAR(100),
  premier tinyint not null default 0,
  company VARCHAR(100),
  reviews INT,
  recentSales INT,
  phone VARCHAR(15),
  imgurl VARCHAR(500),
  PRIMARY KEY (id)
);

-- only one agent per home
CREATE TABLE homes (
  id INT AUTO_INCREMENT,
  address VARCHAR(200),
  homeAgent INT,
  PRIMARY KEY (id),
  FOREIGN KEY (homeAgent) REFERENCES listedAgent(id)
);

CREATE TABLE messages (
  id INT AUTO_INCREMENT,
  yourname VARCHAR(100),
  phone VARCHAR(15),
  email VARCHAR(50),
  note VARCHAR(500),
  PRIMARY KEY (id)
);