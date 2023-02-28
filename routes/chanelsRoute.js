const express = require('express');

const router= express.Router();

router.get('/Channels',(req,res,next)=>{
    res.json('chanels route')

})
router.get('/Topchart',(req,res,next)=>{

})
router.get('/Aboutus',(req,res,next)=>{

})

router.post('/Addchannel',(req,res,next)=>{
})

router.delete('/Addchannel',(req,res,next)=>{
})

module.exports= router;