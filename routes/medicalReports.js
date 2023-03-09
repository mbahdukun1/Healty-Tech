const express = require('express')
const UserController = require('../controller/userRole')
const router = express.Router()

router.get('/showMedicalRecords', UserController.medicalRecord)
router.get('/add/medical', UserController.addMedical)
router.post('/add/medical', UserController.addMedicalPost)
router.get('/:id', UserController.readMedical)
router.post('/:id/edit', UserController.editMedical)
router.get('/deleteMedical/:id', UserController.deleteMedical)

module.exports = router