const mongoose = require('mongoose')

const contentschema = new mongoose.Schema({

    user_id:String,
    title:String,
    type:String,
    url:String,
    category:String,
    likes:[],
    comments:[],
    created_at:Date,
   

})
module.exports=mongoose.model('Content',contentschema)