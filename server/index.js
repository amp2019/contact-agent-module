const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const dbmysql = require('../data/mysql.js');
//ERROR POSSIBLE! Running mysql and pgsql at same time
const dbpgsql = require('../data/pgsql.js');
const seed = require('../data/createDataFile.js')
//const pg = require('./pgRoutes.js'); //need npm install router


const app = express();
//seed.seeder(1000000); //200,000

// const PORT = process.env.PORT || 8083;
const PORT = 8083;

app.use(express.static(path.resolve(__dirname, '../client/dist')));
app.use(bodyParser.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// need router app.get('/wut', pg.gethouse)
app.get('/api/:houseId', (req,res) => {
  let houseId = 1;
  if (req.params.houseId) {
    houseId = req.params.houseId;
    console.log('params', houseId)
  }
  if (req.body.houseId) {
    houseId = req.body.houseId;
    console.log('body', houseId)
  }
  console.log('getHouse hit in pgRoutes')
  dbpgsql.getAHomePgsql(houseId, (err,data) => {
    if(err) {
      console.log(err)
      res.status(401).send(err);
    } else {
      res.status(201).send(data);
    }
  });
})

app.post('/api/:houseId', (req,res) => {
  let houseId = 1;
  if (req.params.houseId) {
    houseId = req.params.houseId;
    console.log('post params', houseId)
  }
  if (req.body.houseId) {
    houseId = req.body.houseId;
    console.log('post body', houseId)
  }
  console.log('getHouse hit in pgRoutes')
  dbpgsql.newNote(houseId, req.body, (err,data) => {
    if(err) {
      console.log(err)
      res.status(401).send(err);
    } else {
      res.status(201).send(data);
    }
  });
})

app.patch('/api/:houseId', (req,res) => {
  let houseId = 1;
  if (req.params.houseId) {
    houseId = req.params.houseId;
    console.log('post params', houseId)
  }
  if (req.body.houseId) {
    houseId = req.body.houseId;
    console.log('post body', houseId)
  }
  console.log('getHouse hit in pgRoutes')
  dbpgsql.updateHome(houseId, req.body, (err,data) => {
    if(err) {
      console.log(err)
      res.status(401).send(err);
    } else {
      res.status(201).send(data);
    }
  });
})

app.delete('/api/:houseId', (req,res) => {
  let houseId = 1;
  if (req.params.houseId) {
    houseId = req.params.houseId;
    console.log('post params', houseId)
  }
  if (req.body.houseId) {
    houseId = req.body.houseId;
    console.log('post body', houseId)
  }
  console.log('getHouse hit in pgRoutes')
  dbpgsql.deleteHome(houseId, (err,data) => {
    if(err) {
      console.log(err)
      res.status(401).send(err);
    } else {
      res.status(201).send(data);
    }
  });
})


//this .get has to stay above the 
//curl -d '{"name":"Monroe Walsh"}' -H "Content-Type: application/json" -X GET http://localhost:8083/agent
app.get('/agent', (req,res) => {
  dbmysql.getAgent(req.body, (err,data) => {
    if(err) {
      console.log(err)
      res.status(401).send(err);
    } else {
      res.status(201).send(data);
    }
  });
})

// renders new html for unique house data
app.get('/:houseId', (req, res) => {
  // let houseId = req.params.houseId;

  res.sendFile(path.resolve(__dirname + '/../client/dist/index.html'));
});

app.get('/houseId/listedAgent/:houseId', (req, res) => {
  let houseId = req.params.houseId;
  dbmysql.getListedAgent(houseId, (err, data) => {
    if (err) {
      res.sendStatus(404);
    } else {
      res.status(200).send(data);
    }
  });
});

app.get('/houseId/premierAgents', (req, res) => {
  dbmysql.getPremierAgents((err, data) => {
    if (err) {
      res.sendStatus(404);
    } else {
      res.status(200).send(data);
    }
  });
});

//crud

//create
//curl -d '{"houseId":"150", "name":"Chaaandy", "company":"Galvanize", "phone":"(484) 484-8844", "url":"www.rickroll.com"}' -H "Content-Type: application/json" -X POST http://localhost:8083/newAgent
//curl -d '{"name":"Monroe Walsh", "company":"Galvanize", "phone":"(484) 484-8844", "url":"www.rickroll.com"}' -H "Content-Type: application/json" -X POST http://localhost:8083/newAgent
app.post('/newAgent', (req,res) => {
  dbmysql.createAgent(req.body, (err) => {
    if(err) {
      console.log(err)
      res.status(409).send(err);
    } else {
      res.status(201).send('success');
    }
  });
})

//read - see above

//update
//**MAKE THE CURL COMMAND!!! 
//curl -d '{"houseId":"153", "name":"Raaandy", "company":"Hack Reactor", "phone":"(555) 484-8844", "url":"www.rickroll.com"}' -H "Content-Type: application/json" -X PATCH http://localhost:8083/updateAgent


app.patch('/updateAgent', (req,res) => {  
  dbmysql.updateAgent(req.body, (err) => {
    if(err) {
      res.status(404).send(err);
    } else {
      res.status(201).send('success');
    }
  });
})

//delete
//curl -d '{"houseId":"149"}' -H "Content-Type: application/json" -X DELETE http://localhost:8083/deleteAgent


app.delete('/deleteAgent', (req,res) => {
  dbmysql.deleteAgent(req.body, (err) => {
    if(err) {
      res.status(404).send(err);
    } else {
      res.status(201).send('success');
    }
  });
})

app.listen(PORT, () => {
  console.log(`Hidey-Ho Cap'n, we are now serving on port ${PORT}!`);
});