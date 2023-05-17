const Subscriber = require('../database/SubscriberModel')

const getSubscriberById =async  (req,res,next) => {
   let subscriber
    try {
        subscriber = await Subscriber.findById(req.params.id);

        if(subscriber == null) {
            return res.status(404).json({message : error.message})
        }
    }
    catch(eror){
         res.status(500).json({message : error.message})
    }
    res.subscriber = subscriber
    next();
 }

const getSubscribers = async (req,res) =>{
    try{
        const subscribers = await Subscriber.find()
         res.status(200).json({data : subscribers})
         
    }
    catch(err){
        res.status(500).json({message : err.message})
    }
}

const getSubscriber = (req,res) =>  res.send(res.subscriber);


const addSubscriber = async (req,res) =>{
    const newSubscriber = new Subscriber({
        name : req.body.name,
        channel : req.body.channel
    });
try{
    const saveSubscriber = await newSubscriber.save();
    res.status(200).json({message : saveSubscriber});
     
}
 catch(err){
        res.status(501).json({message : err.message})
    }
}

const removeSubscriber = async (req, res) => {
    try{
        await res.subscriber.deleteOne({_id : parseInt(res.subscriber._id)});
        res.json({message : "Subscriber removed successfully"})
        
    }
    catch(err){
         res.status(500).json({message : err.message})
    }
}

const updateSubscriber = async (req, res) => {
    if(req.body.name != null){
        res.subscriber.name = req.body.name;
    }
    if(req.body.channel != null){
        res.subscriber.channel = req.body.channel;
    }
    try{
        const updateSubscriber  = await res.subscriber.save();
          res.json({
            data : updateSubscriber,
            message : "Subscriber Updated successfully"})
     
        }
    catch(err){
         res.status(400).json({message : err.message})
    }
}
module.exports =  {getSubscriberById, getSubscriber, getSubscribers, addSubscriber,removeSubscriber,updateSubscriber} 