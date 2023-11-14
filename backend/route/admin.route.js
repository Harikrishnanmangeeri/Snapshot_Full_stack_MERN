const express = require('express')
var adminRouter = express.Router()
const controller = require('../controller/admin.controller')

// adminRouter.post('/admin/login',controller.admin)
adminRouter.get('/admin/viewusers',controller.viewuser)
adminRouter.post('/admin/blockuser',controller.blockuser)
adminRouter.get('/admin/viewblockuser',controller.viewblockuser)
adminRouter.get('/admin/reports',controller.viewreports)
adminRouter.get('/admin/viewSnap',controller.viewSnap)





module.exports = adminRouter