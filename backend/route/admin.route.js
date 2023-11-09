const express = require('express')
var adminRouter = express.Router()
const controller = require('../controller/admin.controller')

// adminRouter.post('/admin/login',controller.admin)
adminRouter.get('/admin/viewusers',controller.viewuser)
adminRouter.post('/admin/blockuser',controller.blockuser)


module.exports = adminRouter