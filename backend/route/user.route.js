const express = require('express')
var userRouter = express.Router()
const controller = require('../controller/user.controller')

userRouter.post('/user/register',controller.register)
userRouter.post('/user/login',controller.login)
userRouter.get('/user/profile/:id',controller.profile)

module.exports = userRouter