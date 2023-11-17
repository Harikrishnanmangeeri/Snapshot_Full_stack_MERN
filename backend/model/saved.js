const mongoose = require('mongoose')

const savedSchema = new mongoose.Schema({
     
    Id:{type:mongoose.Schema.ObjectId,ref:"User"},
    content_id:{type:mongoose.Schema.ObjectId,ref:"Content"},
    created_at:Date,
   

})
module.exports=mongoose.model('saved',savedSchema)