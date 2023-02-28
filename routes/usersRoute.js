const express = require('express');
const router= express.Router();

router.get('/SignUp',(req,res,next)=>{
    res.json('users route');
    
})
router.get('/Login',(req,res,next)=>{

})

module.exports= router;