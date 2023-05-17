const mongoose = require('mongoose');

const SubscribersModel = new mongoose.Schema({
    name :{
        type : String,
        required : true
    },
    channel : {
         type : String,
        required : true
    },
    subDate : {
         type : Date,
        required : true,
        default : Date.now()
    }
})

module.exports = mongoose.model('Subscriber',SubscribersModel)