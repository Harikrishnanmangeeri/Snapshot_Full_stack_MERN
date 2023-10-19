const express = require('express')
var userRouter = express.Router()
const controller = require('../controller/user.controller')
const auth = require('../middleware/jwt.user')

userRouter.post('/user/register',controller.register)
userRouter.post('/user/login',controller.login)
userRouter.get('/user/profile/:id',controller.profile)
userRouter.put('/user/Editprofile/:id',controller.editprofile)
userRouter.put('/user/Editavatar/',auth,controller.editavatar)
module.exports = userRouter