const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('../data/db.js');

const app = express();
const PORT = process.env.PORT || 8082;

app.use(express.static(path.resolve(__dirname, '../client/dist')));
app.use(bodyParser.json());
app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// renders new html for unique house data
app.get('/:houseId', (req, res) => {
  // let houseId = req.params.houseId;

  res.sendFile(path.resolve(__dirname + '/../client/dist/index.html'));
});

app.get('/houseId/listedAgent/:houseId', (req, res) => {
  let houseId = req.params.houseId
  // let houseId = 99
  // if(req.params.houseId) {
  //   houseId = req.params.houseId
  // }
  db.getListedAgent(houseId, (err, data) => {
    if (err) {
      res.sendStatus(404);
    } else {
      console.log('server index sent data back')
      res.status(200).send(data);
    }
  });
});

app.get('/houseId/premierAgents', (req, res) => {
  db.getPremierAgents((err, data) => {
    if (err) {
      res.sendStatus(404);
    } else {
      res.status(200).send(data);
    }
  });
});


//crud

//create
//curl -d '{"houseId":"150", "name":"Raaandy", "company":"Galvanize", "phone":"(484) 484-8844", "url":"www.rickroll.com"}' -H "Content-Type: application/json" -X POST http://localhost:8082/newAgent
//curl -d '{"name":"Monroe Walsh", "company":"Galvanize", "phone":"(484) 484-8844", "url":"www.rickroll.com"}' -H "Content-Type: application/json" -X POST http://localhost:8082/newAgent
app.post('/newAgent', (req,res) => {
  db.createAgent(req.body, (err) => {
    if(err) {
      console.log(err)
      res.status(409).send(err);
    } else {
      res.status(201).send('success');
    }
  });
})

//read
app.get('/agent', (req,res) => {
  db.getAgent(req.body, (err) => {
    if(err) {
      console.log(err)
      res.status(409).send(err);
    } else {
      res.status(201).send('success');
    }
  });
})

//update
//**MAKE THE CURL COMMAND!!! 
//curl -d '{"houseId":"153", "name":"Raaandy", "company":"Hack Reactor", "phone":"(555) 484-8844", "url":"www.rickroll.com"}' -H "Content-Type: application/json" -X PATCH http://localhost:8082/updateAgent


app.patch('/updateAgent', (req,res) => {  
  db.updateAgent(req.body, (err) => {
    if(err) {
      res.status(404).send(err);
    } else {
      res.status(201).send('success');
    }
  });
})

//delete
//curl -d '{"houseId":"149"}' -H "Content-Type: application/json" -X DELETE http://localhost:8082/deleteAgent


app.delete('/deleteAgent', (req,res) => {
  db.deleteAgent(req.body, (err) => {
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
