require ("dotenv").config()
const userschema = require("../model/user")
const jwt = require ('jsonwebtoken')


module.exports={
  
    viewuser:async(req,res)=>{
        const adminuser = await userschema.find()
        res.status(200).json({
            status:'sucess',
            message:'Successfully fetched user datas.',
            data:adminuser
        })

    },
    blockuser:async(req,res)=>{

    },
    
    


}