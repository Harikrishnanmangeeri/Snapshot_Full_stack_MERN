const mongoose = require('mongoose')

const contentschema = new mongoose.Schema({

    user_id:Object,
    title:String,
    type:String,
    url:String,
    category:String,
    likes:[],
    comments:[],
    created_at:Date,
    

})
module.exports=mongoose.model('Content',contentschema)