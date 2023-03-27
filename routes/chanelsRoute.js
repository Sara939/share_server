const express = require('express');
const {getAllChannels,postChannel,deleteChannel}= require('../controlers/chanelsControl')

const router= express.Router();

router.get('/Channels',getAllChannels);
router.post('/Addchannel',postChannel);
router.delete('/Addchannel',deleteChannel);

module.exports= router;