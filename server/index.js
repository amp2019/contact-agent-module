const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('../data/db.js');

const app = express();
// app.use(function (req, res, next) {
//   res.setHeader("Content-Security-Policy", "font-src 'self' https://use.fontawesome.com/releases/v5.7.2/css/all.css");
//   return next();
// });
const PORT = process.env.PORT || 8081;

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
  let houseId = req.params.houseId;
  db.getListedAgent(houseId, (err, data) => {
    if (err) {
      res.sendStatus(404);
    } else {
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

app.listen(PORT, () => {
  console.log(`Hidey-Ho Cap'n, we are now serving on port ${PORT}!`);
});
