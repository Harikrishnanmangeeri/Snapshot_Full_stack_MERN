const userschema = require('../model/user')
const bcrypt = require('bcrypt')

module.exports={

    register:async(req,res) =>{
        const { username, password, email } = req.body;
    const user = await userschema.find({email:email})
if (user.length>0){;
    return res.json('already registred')
}
else{
    await userschema.create({
        username: username,
        email: email,
        password:await bcrypt.hash(password, 10)
      });
      res.json('add sucessfully')
}


}

}