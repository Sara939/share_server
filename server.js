const express = require('express');
const cors = require('cors');
const server = express();
const PORT= 5000;
const channelsRouter= require('./routes/chanelsRoute');
const usersRouter= require('./routes/usersRoute');
const mongoose= require('mongoose');




server.use(cors());
server.use(express.json({extended: true}));
server.use(express.urlencoded({extended:true}));

server.use(channelsRouter);
server.use(usersRouter);

server.get('/',(req,res,next)=>{
res.json('home')
});

mongoose.connect('mongodb+srv://sara:saralikaount@channels.elrzcqo.mongodb.net/channelretryWrites=true&w=majority')
.then(()=>{
   server.listen(PORT,()=>{
    console.log('server on');
}); 
})
.catch(err=> console.log(err))


