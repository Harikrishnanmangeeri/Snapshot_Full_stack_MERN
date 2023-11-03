const mongoose = require('mongoose')

const contentschema = new mongoose.Schema({

    user_id:{type:mongoose.Schema.ObjectId,ref:"User"},
    title:String,
    type:String,
    description:String,
    url:String,
    category:String,
    likes:[],
    comments:[],
    created_at:Date,
   

})
module.exports=mongoose.model('Content',contentschema)