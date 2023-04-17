const chanelModel= require('../models/chanelsModel');

const getAllChannels= async (req,res)=>{

   const chanels = await chanelModel.find({})
   chanels ? res.send(chanels) : res.send({massage: "no chanels"})
}


const postChannel= async(req,res)=>{
 const {title,text,videoname,category,date}= req.body
 try{
    const newchanel= await chanelModel.create({title,text,videoname,category,date})
 }

 catch(err){
    console.log(err);
 }
 res.send({massage: "added chanel to db"})
 console.log("done");

};

const deleteChannel= async (req,res)=>{
   const chaneltitle= req.body.title
   try{
      const chanelToDelete = await chanelModel.deleteOne(chaneltitle)
      !chanelToDelete ? res.send({massage: "chanel not found"}) : res.send({massage: "sucsessfuly deleted"})
   }
  
   catch(err){
      console.log(err);
   }
   res.status(200)
   console.log("deleted");


};

module.exports= {getAllChannels,postChannel,deleteChannel}




