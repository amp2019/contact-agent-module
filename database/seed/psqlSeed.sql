DROP DATABASE heyagent;
CREATE DATABASE heyagent;
\connect heyagent;

CREATE TABLE agents (
  id SERIAL,
  name VARCHAR(50),
  premier BOOLEAN not null default false,
  company VARCHAR(50),
  reviews INT,
  recentSales INT,
  phone VARCHAR(15),
  imgurl VARCHAR(200),
  PRIMARY KEY (id)
);

CREATE TABLE homes (
  id SERIAL,
  address VARCHAR(100),
  agent INT,
  PRIMARY KEY (id),
  FOREIGN KEY (agent) REFERENCES agents(id)
);

CREATE TABLE messages (
  houseId INT,
  name VARCHAR(50),
  phone VARCHAR(15),
  email VARCHAR(50),
  note VARCHAR(500),
  created TIMESTAMP DEFAULT now(),
  FOREIGN KEY (houseId) REFERENCES homes(id)
);

COPY agents (name,premier,company,reviews,recentSales,phone,imgurl)
FROM '/Users/Raaandy/Desktop/hackReactor/amp/contact-agent-module/database/seed/datafiles/agentsfile.csv'
WITH (format csv, header)
;

COPY homes (address,agent)
FROM '/Users/Raaandy/Desktop/hackReactor/amp/contact-agent-module/database/seed/datafiles/homesfile.csv'
WITH (format csv, header)
;

COPY messages
FROM '/Users/Raaandy/Desktop/hackReactor/amp/contact-agent-module/database/seed/datafiles/messagesfile.csv'
WITH (format csv, header)
;

