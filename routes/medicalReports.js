const express = require('express')
const UserController = require('../controller/userRole')
const router = express.Router()

router.get('/details', UserController.medicalRecord)
// router.get('/add', UserController.addMedical)
// router.post('/add', UserController.addMedicalPost)
// router.get('/:id/edit', UserController.addMedical)
// router.post('/:id/edit', UserController.addMedicalPost)


module.exports = router