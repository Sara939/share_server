const express = require('express');

const server = express();
const PORT= 5000;
const channelsRouter= require('./routes/chanelsRoute');
const usersRouter= require('./routes/usersRoute');

server.use(channelsRouter);
server.use(usersRouter);

server.get('/',(req,res,next)=>{
res.json('djdjd')
});

server.listen(PORT,()=>{
    console.log('server on');
});
