DROP DATABASE HeyAgent;
CREATE DATABASE HeyAgent;
\connect heyagent;


--KEEP IT SIMPLE (consider form on page first)
-- 1. GET: By homeId, return home address and listed agent 
        -- select * from homes,agents where homes.id={homeId} AND agents.id=homes.agent;
-- 1.2 maybe GET by address as well
-- 1.3 maybe GET ALL addresses as well
-- 1.4 maybe GET random premium agents listed as well
-- 2. POST: By homeId, a new message
        -- insert into messages (home,name,phone,email,note) values ('')
-- 2.1. maybe POST, by adress, a new home
-- 3. UPDATE: By homeId, a different listed agent id and/or address 
        -- update homes set agent=2,address='252 lunch rd' where id=1
-- 4. DELETE a home
        -- delete from homes where id=4

CREATE TABLE agents (
  id SERIAL,
  name VARCHAR(100),
  premier BOOLEAN not null default false,
  company VARCHAR(100),
  reviews INT,
  recentSales INT,
  phone VARCHAR(15),
  imgurl VARCHAR(500),
  PRIMARY KEY (id)
);

-- only one agent per home
CREATE TABLE homes (
  id SERIAL,
  address VARCHAR(200),
  agent INT,
  PRIMARY KEY (id),
  FOREIGN KEY (agent) REFERENCES agents(id)
);

CREATE TABLE messages (
  id SERIAL,
  home INT,
  name VARCHAR(100),
  phone VARCHAR(15),
  email VARCHAR(50),
  note VARCHAR(500),
  created TIMESTAMP DEFAULT now(),
  PRIMARY KEY (id),
  FOREIGN KEY (home) REFERENCES homes(id)
);