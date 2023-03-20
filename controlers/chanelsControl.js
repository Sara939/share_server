const chanelsModel= require('../models/chanelsModel');

const getAllChannels= (req,res,next)=>{

   chanelsModel ? res.send({massage: "djdjd", chanelsModel}) : res.send({massage: "no chanels"})
}

const getTopChart= (req,res,next)=>{


};


const postChannel= async(req,res,next)=>{
 const {title,text,date,category}= req.body
 try{
    const chanel= await chanelsModel.create({title,text,date,category})
 }

 catch(err){
    console.log(err);
 }
 res.send({massage: "added chanel to db"})

};

const deleteChannel= (req,res,next)=>{

};

module.exports= {getAllChannels,getTopChart,postChannel,deleteChannel}




