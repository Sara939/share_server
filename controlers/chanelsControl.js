const chanelModel= require('../models/chanelsModel');

const getAllChannels= async (req,res)=>{

   const chanels = await chanelModel.find({})
   chanels ? res.send(chanels) : res.send({massage: "no chanels"})
}


const postChannel= async(req,res)=>{
 const {title,text,videoname,category}= req.body
 try{
    const newchanel= await chanelModel.create({title,text,videoname,category})
 }

 catch(err){
    console.log(err);
 }
 res.send({massage: "added chanel to db"})
 console.log("done");

};

const deleteChannel= (req,res)=>{

};

module.exports= {getAllChannels,postChannel,deleteChannel}




