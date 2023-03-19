const chanel= require('../models/chanelsModel');
const getAllChannels= (req,res,next)=>{
    res.json('chanels route')

}

const getTopChart= (req,res,next)=>{

};

const getAboutUs= (req,res,next)=>{

};

const postChannel= async(req,res,next)=>{
 const {title,text,date,category}= req.body
 try{
    const chanel= await chanel.create({title,text,date,category})
 }

 catch(err){
    console.log(err);
 }
 res.send("get it")

};

const deleteChannel= (req,res,next)=>{

};

module.exports= {getAllChannels,getTopChart,getAboutUs,postChannel,deleteChannel}




