const express = require('express')
var userRouter = express.Router()
const controller = require('../controller/user.controller')
const auth = require('../middleware/jwt.user')

userRouter.post('/user/register',controller.register)
userRouter.post('/user/login',controller.login)
userRouter.get('/user/profile',auth,controller.profile)
userRouter.put('/user/Editprofile',auth,controller.editprofile)
userRouter.put('/user/Editavatar',auth,controller.editavatar)
userRouter.put('/user/Editbanner',auth,controller.editbanner)
userRouter.post('/user/draft',auth,controller.draft)
module.exports = userRouter