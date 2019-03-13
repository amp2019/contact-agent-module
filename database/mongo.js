const mongoose = require('mongoose');
const config = require('./config.js');

mongoose.connect(config.mongoConfig, { useNewUrlParser: true });
//mongoose.connect(config.awsMongoConfig, { useNewUrlParser: true });

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => console.log('Mongo is open for business'))

const vanillaFind = mongoose.model('basic',new mongoose.Schema({ _id: String}),'homes'); 

//function for gets
const getAnAgent = (id, cb) => {
    let houseId = id.toString();
    //may need to increase the poolSize to 100 from default=5 at the connection
    //vanillaFind.find({"_id":houseId}, (err, data) => {
    vanillaFind.findById(houseId, 'agent', { lean: true }, (err, data) => {
        cb(null, data)
    })
}

//use this model for posts
const homeListingSchema = new mongoose.Schema({
    _id: String,
    address: String,
    agent:{
        agentname:String,
        premier:String,
        company:String, 
        reviews:Number,
        recentSales:Number,
        phone:String,
        imgurl:String
    },
    messages:[{
            username:String,
            phone:String,
            email:String,
            note:String
    }]
})

//model for posts
const homeListing = mongoose.model('homeListing',homeListingSchema,'homes')

//function for posts

const listingAgentAndPremier = (id,cb) => {
    let houseId = id.toString();
    homeListing.findById(houseId, 'agent', { lean: true }, (err, data) => {
        cb(null, data)
    })
    //possible to run listedAgent and premierAgent query in same query or function? 
}

const getThreePremiers = (cb) => {
    //this query below is super slow
    let skipRand = 1 + Math.floor(Math.random()*999)
    homeListing.find({"agent.premier":"true"}, 'agent', { limit:3,skip:skipRand }, (err, data) => {
        cb(null, data)
    })
    //use the skip to randomize agents returned
    //use the limit to only get top 3 results
}

const newNote = (homeId,data,callback) => {
    let houseId = homeId ? homeId.toString() : data.houseId.toString()
    let name = data.username ? data.username : null
    let email = data.email ? data.email : null
    let phone = data.phone ? data.phone : null
    let note = data.note ? data.note : null
    //let houseId = id.toString();
    let query = ({$addToSet:{"messages":{"username":name,"phone":phone,"email":email,"note":note}}})
    homeListing.findByIdAndUpdate(houseId, query, (err, data) => {
        //console.log('data', data)
        if (err){
            console.log('err in mongo.js hit',err)
            //callback('err',err)
        } else {
            callback(null,'success!')
        }
    })
}

//add input validation like above, and maybe $set is right?
const updateHome = (homeId, data, cb) => {
    let houseId = homeId ? homeId.toString() : data.houseId.toString()
    let name = data.agentName ? data.agentName : null
    let premier = data.premier ? data.premier: null;
    let company = data.company ? data.company : null;
    let reviews = data.reviews ? data.reviews : null;
    let recentSales = data.recentSales ? data.recentSales : null
    let phone = data.phone ? data.phone : null
    let imgurl = data.imgurl ? data.imgurl : null
    let query = ({$set:{"agent":{"agentname":name,"premier":premier,"company":company,"reviews":reviews,"recentSales":recentSales,"phone":phone,"imgurl":imgurl}}})
    homeListing.findByIdAndUpdate(houseId, query, (err, data) => {
        if (err){
            console.log('err in mongo.js hit',err)
        } else {
            cb(null,'success!')
        }
    })
}

const deleteHome = (homeId, cb) => {
    let houseId = homeId.toString() 
    homeListing.deleteOne({"_id":houseId}, (err, data) => {
        if (err){
            console.log('err in mongo.js hit',err)
        } else {
            cb(null,'success!')
        }
    })
}

module.exports = { getAnAgent, newNote, updateHome, deleteHome, getThreePremiers };