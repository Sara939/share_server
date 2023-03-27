const chanelModel= require('../models/chanelsModel');

const getAllChannels= async (req,res,next)=>{

   const chanels = await chanelModel.find({})
   chanels ? res.send(chanels) : res.send({massage: "no chanels"})
}


const postChannel= async(req,res,next)=>{
 const {title,text,date,category}= req.body
 try{
    const newchanel= await chanelModel.create({title,text,videoname,date,category})
 }

 catch(err){
    console.log(err);
 }
 res.send({massage: "added chanel to db", newchanel})

};

const deleteChannel= (req,res,next)=>{

};

module.exports= {getAllChannels,postChannel,deleteChannel}




