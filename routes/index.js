const express = require('express')
const Controller = require ('../controller/index')
const router = express.Router()

// app.get('/', Controller.login)
router.use('/userDetail', require('./userDetail'))
router.use('/medicalReports', require('./medicalReports'))

module.exports = router
