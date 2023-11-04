const jwt = require('jsonwebtoken')
const auth = (req , res,next)=>{
    const token = req.headers['authorization']
    // console.log(token);
        const recive = token && token.split(' ')[1]
        const jwtverify = jwt.verify(recive,process.env.ACESS_USERTOKEN_SECRET)
        if(jwtverify){
            res.token=jwtverify.id
        next()
        }
        else{
            res.json("permision decline")
        }
    
}
module.exports=auth