const express = require('express')
var userRouter = express.Router()
const controller = require('../controller/user.controller')

userRouter.post('/user/register',controller.register)
userRouter.post('/user/login',controller.login)

module.exports = userRouter