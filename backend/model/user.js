const mongoose = require('mongoose')

const userschema = new mongoose.Schema({

    username:String,
    email:String,
    password:String,
    avatar:String,
    bio:String,
    followers:[],
    following:[],
    created_at:Date,


})
module.exports=mongoose.model('User',userschema)