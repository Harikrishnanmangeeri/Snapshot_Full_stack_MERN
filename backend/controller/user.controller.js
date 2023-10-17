require("dotenv").config();
const userschema = require('../model/user')
const bcrypt = require('bcrypt')
const jwt = require("jsonwebtoken");
const { joiuserschema } = require('../model/validationschema')  


module.exports={

    register:async(req,res) =>{
        const { value , error } =joiuserschema.validate(req.body)
        const { username, password, email } = value;
if(error) {
    res.json(error.message);
}else{
    const user = await userschema.find({email:email})
    if (user.length>0){;
        return res.json('already registred')
    }else{
        await userschema.create({
            username: username,
            email: email,
            password:await bcrypt.hash(password, 10),
            created_at:Date()
          });
          res.json('add sucessfully')
    }
}
},
login:async(req,res) =>{
    const { value, error } = joiuserschema.validate(req.body);
    const { email, password } = value;

    if (error){
        req.json(error.message);
    }else{
        const user =await userschema.find({
            email: email
        });
    

    if (!user) {
        return res.send("user unavaliable");
    }
    else{
        const checkpass = await bcrypt.compare( password,user[0].password)
        if(!checkpass){
            return res.json("password incorrect");
        }
        else{
            const resp = {
                id: user[0].id,
              };
              const token = jwt.sign(resp, process.env.ACESS_USERTOKEN_SECRET, {
                expiresIn: 86400,
              });
              res.send({ auth: true, token: token, id:user[0].id });
            
        }}}},

        profile:async(req,res)=>{
            const profile = await userschema.find({_id: req.params.id});
            if(profile.length !=0){
                res.json(profile)
            }else{
                res.json('user not found!')
            }
        },


}