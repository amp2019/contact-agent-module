//file not in use


// const dbpgsql = require('../data/pgsql.js');

// const getHouse = (req,res) => {
//     console.log('getHouse hit in pgRoutes')
//     dbpgsql.getAHomePgsql(req.body.houseId, (err,data) => {
//       if(err) {
//         console.log(err)
//         res.status(401).send(err);
//       } else {
//         res.status(201).send(data);
//       }
//     });
//   }

// module.exports = { getHouse };