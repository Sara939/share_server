const express = require('express');
const cors = require('cors');
const server = express();
const PORT= 5000;
const channelsRouter= require('./routes/chanelsRoute');
const mongoose= require('mongoose');
const dotenv= require('dotenv');
dotenv.config();





server.use(cors());
server.use(express.json({extended: true}));
server.use(express.urlencoded({extended:true}));

server.use(channelsRouter);

mongoose.connect(process.env.CONECTION_TO_DB)
.then(()=>{
   server.listen(PORT,()=>{
    console.log('server on');
}); 
})
.catch(err=> console.log(err))


