const express = require('express')
var adminRouter = express.Router()
const controller = require('../controller/admin.controller')
const trycatchmiddleware =require('../middleware/trycatchmidlware')
const auth =require('../middleware/jwt.admin')
// adminRouter.post('/admin/login',controller.admin)
adminRouter.get('/admin/viewusers',auth,trycatchmiddleware(controller.viewuser))
adminRouter.post('/admin/blockuser',auth,trycatchmiddleware(controller.blockuser))
adminRouter.get('/admin/viewblockuser',auth,trycatchmiddleware(controller.viewblockuser))
adminRouter.get('/admin/reports',auth,trycatchmiddleware(controller.viewreports))
adminRouter.get('/admin/viewSnap',auth,trycatchmiddleware(controller.viewSnap))





module.exports = adminRouter