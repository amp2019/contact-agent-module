# Current Project Repo

 - https://github.com/amp2019/contact-agent-module
 

# Original Repo

 - https://github.com/xillow-talk/steve-component-agent-contact


# API References 

*formatting example*

OPERATION (endpoint) [required fields] {other fields}
  - example command 1
  - example command 2

CREATE (/newAgent) [name] {houseId, company, phone, url}
  - ``curl -d '{"houseId":"150", "name":"Luke Lucas", "company":"Galvanize", "phone":"(484) 484-8844", "url":"www.rickroll.com"}' -H "Content-Type: application/json" -X POST http://localhost:8083/newAgent``
  - ``curl -d '{"name":"Raaandy"}' -H "Content-Type: application/json" -X POST http://localhost:8083/newAgent``

READ (/:houseId) [name] {}
  - ``curl -d '{"name":"Luke Lucas"}' -H "Content-Type: application/json" -X GET http://localhost:8083/agent``
  - ``curl -d '{"name":"Raaandy"}' -H "Content-Type: application/json" -X GET http://localhost:8083/agent``

UPDATE (/updateAgent) [name] {houseId, company, phone, url}
  - ``curl -d '{"houseId":"151", "name":"Luke Lucas", "company":"NASA", "phone":"(555) 555-8844", "url":"www.spacex.com"}' -H "Content-Type: application/json" -X PATCH http://localhost:8083/updateAgent``
  - ``curl -d '{"name":"Raaandy", "houseId":"151"}' -H "Content-Type: application/json" -X PATCH http://localhost:8083/updateAgent``

DELETE (/deleteAgent) [name] {}
  - ``curl -d '{"name":"Luke Lucas"}' -H "Content-Type: application/json" -X DELETE http://localhost:8083/deleteAgent``
  - ``curl -d '{"name":"Raaandy"}' -H "Content-Type: application/json" -X DELETE http://localhost:8083/deleteAgent``


# INSTRUCTIONS TO SETUP RUNNING INSTANCE

1) `npm install` on root dirctory of this repo
2) `npm run dev-pack` to bundle all assets to serve on html
3) run `npm run seed`, or log into your mysql (`mysql -u root -p`), and create the database 'agents'
4) rename the *'RENAMEconfig.js'* filename to *'config.js'*
  a. update user info in *'config.js'* to your personal mysql account
  b. (note: the *'config.js'* file is in the .gitignore file to prevent password uploads to github)
5) `npm run faker` to seed fake data into mysql
6) `npm run start` to start server
7) load localhost:8082 in the browser



NOTES for postgres routes

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