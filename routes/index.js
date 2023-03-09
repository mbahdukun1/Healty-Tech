const express = require('express')
const Controller = require ('../controller/index')
const router = express.Router()

router.get('/', Controller.home)
// router.get('/login', Controller.login)
// router.get('/register', Controller.register) 
router.use('/userDetail', require('./userDetail'))
router.use('/medicalReports', require('./medicalReports'))

module.exports = router
