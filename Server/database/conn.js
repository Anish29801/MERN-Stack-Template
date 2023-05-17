
const mongoose = require('mongoose');

const dbUrl = process.env.DB_URL;
const collectionName = process.env.MODEL_NAME;

const url = dbUrl + collectionName;

mongoose.connect(url)
const db = mongoose.connection

db.on('error',(error)=> console.error(error))
db.once('open',()=> console.log(`connection opened successfully`))


module.exports = db;