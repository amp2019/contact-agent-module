const pgp = require('pg-promise')()
const config = require('./config.js');

const pgsqlDb = pgp(config.pgsqlConfig);

const getAHomePgsql = (houseId, cb) => {
    if (!houseId || !houseId > 0) {
        console.log('big iff hit')
        houseId = 1;
    }
    console.log('pgdb',houseId)
    pgsqlDb.any(`select homes.id,homes.address,homes.agent,agents.name,agents.premier,agents.company,agents.imgurl from homes,agents where homes.id=${houseId} AND agents.id=homes.agent;`)
    .then((response) => {
        cb(null,response);
    })
}

const newNote = (homeId, data, cb) => {
    let houseId = homeId ? homeId : data.houseId
    let name = data.username ? data.username : null
    let email = data.email ? data.email : null
    let phone = data.phone ? data.phone : null
    let note = data.note ? data.note : null
    pgsqlDb.any(`insert into messages (houseId,name,phone,email,note) values (${houseId},'${name}','${phone}','${email}','${note}');`)
    .then((response) => {
        cb(null,response);
    })
}

const updateHome = (homeId, data, cb) => {
    let houseId = homeId ? homeId : 1
    if (data.agentId) {
        pgsqlDb.any(`UPDATE homes set agent=${data.agentId} where id=${houseId};`)
        .then((response) => {
            cb(null,response);
        })
    } else {
        cb('invalid request with agentId')
    }
}

const deleteHome = (homeId, cb) => {
    pgsqlDb.any(`delete from messages where houseId=${homeId};`)
    .then(() => pgsqlDb.any(`delete from homes where id=${homeId};`)
    .then((response) => {
        cb(null,response);
    }))
}

module.exports = { getAHomePgsql, newNote, updateHome, deleteHome };