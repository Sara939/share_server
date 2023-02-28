const express = require('express');
const {getAllChannels,getTopChart,getAboutUs,postChannel,deleteChannel}= require('../controlers/chanelsControl')

const router= express.Router();

router.get('/Channels',getAllChannels);
router.get('/Topchart',getTopChart);
router.get('/Aboutus',getAboutUs);
router.post('/Addchannel',postChannel);
router.delete('/Addchannel',deleteChannel);

module.exports= router;