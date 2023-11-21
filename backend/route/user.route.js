const express = require('express')
var userRouter = express.Router()
const controller = require('../controller/user.controller')
const auth = require('../middleware/jwt.user')
const trycatchmiddleware = require("../middleware/trycatchmidlware")
userRouter.post('/user/register',trycatchmiddleware(controller.register))
userRouter.post('/user/login',trycatchmiddleware(controller.login))
userRouter.get('/user/profile',auth,trycatchmiddleware(controller.profile))
userRouter.put('/user/Editprofile',auth,trycatchmiddleware(controller.editprofile))
userRouter.put('/user/Editavatar',auth,trycatchmiddleware(controller.editavatar))
userRouter.put('/user/Editbanner',auth,trycatchmiddleware(controller.editbanner))
userRouter.post('/user/draft',auth,trycatchmiddleware(controller.draft))
userRouter.put('/user/draft',auth,trycatchmiddleware(controller.deletedraft))
userRouter.post('/user/postcontent',auth,trycatchmiddleware(controller.postContent))
userRouter.get('/user/showcontent',auth,trycatchmiddleware(controller.showContent))
userRouter.get('/user/ShowAllContentHome',trycatchmiddleware(controller.ShowAllContentHome))
userRouter.post('/user/contentUser',trycatchmiddleware(controller.contentUser))
userRouter.post('/user/setLike',auth,trycatchmiddleware(controller.setLike))
userRouter.post('/user/follow',auth,trycatchmiddleware(controller.follow))
userRouter.post('/user/comment',auth,trycatchmiddleware(controller.comment))
userRouter.post('/user/showcomment',trycatchmiddleware(controller.showcomment))
userRouter.post('/user/showAcountUserProfile',trycatchmiddleware(controller.showUserProfile))
userRouter.delete('/user/content/:id',trycatchmiddleware(controller.deletecontent))
userRouter.post('/user/reportcontent',auth,trycatchmiddleware(controller.reportcontent))
userRouter.post('/user/SaveContent',auth,trycatchmiddleware(controller.savesnap))
userRouter.get('/user/savedSnap',auth,controller.viewsavedSnap)
userRouter.get('/user/allUser',controller.alluser)





module.exports = userRouter