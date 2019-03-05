# Current Project Repo

 - https://github.com/amp2019/contact-agent-module
 

# Original Repo

 - https://github.com/xillow-talk/steve-component-agent-contact


# API References 

## Properties

The following table defines the properties used with the API

| Key           | Example Value  | Type    |
| ------------- |:--------------:| -------:|
| homeId        | 600613         | INT     |
| address       | 242 cini rd.   | String  |
| agents        | (nested obj)   | Object  |
| agentId       | 81840          | INT     |
| agentName     | Agent Smith    | String  |
| premier       | True           | Boolean |
| company       | Acme Inc       | String  |
| reviews       | 10             | INT     |
| recentSales   | 4              | INT     |
| phone         | (555) 444 3333 | String  |
| imgurl        | http://s3.com  | String  |
| messages      | (nested obj)   | Object  |
| username      | Mike           | String  |
| email         | mike@g.co      | String  |
| note          | I like house   | String  |


## Request and Response Examples

### Purpose

OPERATION (endpoint) [required fields] {other fields}

  - `example command`
    - ```
    example response
    ```

### Post a request to talk with an agent about a listing

CREATE (/api) [houseId] {username, email, phone, note}

  - `curl -d '{"houseId":"150", "username":"Luke Lucas", "email":"hey@hey.com", "phone":"(484) 484-8844", "note":"I like the house. Can we talk?"}' -H "Content-Type: application/json" -X POST http://localhost:8083/api`
    - ```
    success!
    ```

### Get address and agent information for a listed house

READ (/api) [houseId] {}

  - `curl -d '{"houseId":"150"}' -H "Content-Type: application/json" -X GET http://localhost:8083/api`
    - ```
    [{"id":150,"address":"503 Dane Points","agent":4911,"name":"Retta Larson","premier":false,"company":"Conroy, Abernathy and Murray","imgurl":"https://s3.amazonaws.com/uifaces/faces/twitter/felipeapiress/128.jpg"}]
    ```

### Update the agent for a house listing

UPDATE (/api) [houseId,agentId] {}

  - `curl -d '{"houseId":"151", "agentId":"5"}' -H "Content-Type: application/json" -X PATCH http://localhost:8083/api`
    - ```
    success!
    ```

#### DELETE (/api) [houseId] {}

  - `curl -d '{"houseId":"151"}' -H "Content-Type: application/json" -X DELETE http://localhost:8083/api`
    - ```
    success!
    ```

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


Routes on roadmap

- 1.1 GET: 3 random agents, with at least 5 sales
- 1.2 GET: By homeId, messages
- 2.1 POST: New homeId and address and (optional agent, maybe autoassign)
- 4.1 DELETE: An agent by ID