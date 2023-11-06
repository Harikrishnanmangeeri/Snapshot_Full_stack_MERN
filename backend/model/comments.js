const mongoose = require('mongoose')

const commentschema = new mongoose.Schema({

    user_id:{type:mongoose.Schema.ObjectId,ref:"User"},
    content_id:String,
    comments:String,
    created_at:Date,
   

})
module.exports=mongoose.model('comment',commentschema)