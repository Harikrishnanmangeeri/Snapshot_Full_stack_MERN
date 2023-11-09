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
userRouter.put('/user/draft',auth,controller.deletedraft)
userRouter.post('/user/postcontent',auth,controller.postContent)
userRouter.get('/user/showcontent',auth,controller.showContent)
userRouter.get('/user/ShowAllContentHome',controller.ShowAllContentHome)
userRouter.post('/user/contentUser',controller.contentUser)
userRouter.post('/user/setLike',controller.setLike)
userRouter.post('/user/follow',controller.follow)
userRouter.post('/user/comment',auth,controller.comment)
userRouter.post('/user/showcomment',controller.showcomment)
userRouter.post('/user/showAcountUserProfile',controller.showUserProfile)
userRouter.delete('/user/content',controller.deletecontent)



module.exports = userRouter