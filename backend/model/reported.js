const mongoose = require('mongoose')

const reportSchema = new mongoose.Schema({
     
    Id:{type:mongoose.Schema.ObjectId,ref:"User"},
    content_id:{type:mongoose.Schema.ObjectId,ref:"Content"},
    report:String,
    created_at:Date,
   

})
module.exports=mongoose.model('report',reportSchema)