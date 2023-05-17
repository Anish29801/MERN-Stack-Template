const express = require('express');

const router = express.Router();

const {getSubscriber,getSubscribers,addSubscriber,updateSubscriber,getSubscriberById,removeSubscriber} = require('../controllers/SubRoutes');

router.get('/',getSubscribers)

router.get('/:id', getSubscriberById, getSubscriber)

router.post('/',addSubscriber)

router.patch('/:id',getSubscriberById,updateSubscriber)

router.delete('/:id',getSubscriberById, removeSubscriber)

module.exports = router;