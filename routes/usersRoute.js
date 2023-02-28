const express = require('express');
const router= express.Router();

const {getLogin,getSignUp}= require('../controlers/usersControl');

router.get('/SignUp',getSignUp)
router.get('/Login',getLogin)

module.exports= router;