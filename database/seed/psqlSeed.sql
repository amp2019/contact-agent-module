DROP DATABASE HeyAgent;
CREATE DATABASE HeyAgent;
\connect heyagent;

CREATE TABLE agents (
  id INT,
  name VARCHAR(100),
  premier BOOLEAN not null default false,
  company VARCHAR(100),
  reviews INT,
  recentSales INT,
  phone VARCHAR(15),
  imgurl VARCHAR(500),
  PRIMARY KEY (id)
);

CREATE TABLE homes (
  id INT,
  address VARCHAR(200),
  agent INT,
  PRIMARY KEY (id),
  FOREIGN KEY (agent) REFERENCES agents(id)
);

CREATE TABLE messages (
  id INT,
  home INT,
  name VARCHAR(100),
  phone VARCHAR(15),
  email VARCHAR(50),
  note VARCHAR(500),
  created TIMESTAMP DEFAULT now(),
  PRIMARY KEY (id),
  FOREIGN KEY (home) REFERENCES homes(id)
);

COPY agents
FROM '/Users/Raaandy/Desktop/hackReactor/amp/contact-agent-module/database/seed/csv/agentsfile.csv'
WITH (format csv, header)
;

COPY homes
FROM '/Users/Raaandy/Desktop/hackReactor/amp/contact-agent-module/database/seed/csv/homesfile.csv'
WITH (format csv, header)
;

COPY messages
FROM '/Users/Raaandy/Desktop/hackReactor/amp/contact-agent-module/database/seed/csv/messagesfile.csv'
WITH (format csv, header)
;