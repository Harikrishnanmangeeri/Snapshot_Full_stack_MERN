const jwt = require('jsonwebtoken')
const adminauth = (req,res,next)=>{
    const token = req.headers['authorization']
    const recive = token && token.split(' ')[1]
        const jwtverify = jwt.verify(recive,process.env.ACCESS_ADMINTOKEN_SECRET)
        if(jwtverify){
            res.token=jwtverify.id
        next()
        }
        else{
            res.json("permision decline")
        }
    
}
module.exports=adminauth