const express = require('express')
const UserController = require ('../controller/userRole')
const router = express.Router()

// router.get('/doctors', UserController.getAllDoctor) 
// router.get('/patients',UserController.getAllPatients)
router.get('/add', UserController.addMedical)
router.post('/add', UserController.addMedicalPost)

module.exports = router