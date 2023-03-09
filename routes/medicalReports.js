const express = require('express')
const Controller = require('../controller/index')
const router = express.Router()

router.get('/showMedicalRecords', Controller.medicalRecord)
router.get('/add/medical', Controller.addMedical)
router.post('/add/medical', Controller.addMedicalPost)
router.get('/:id', Controller.readMedical)
router.post('/:id/edit', Controller.editMedical)
router.get('/deleteMedical/:id', Controller.deleteMedical)


module.exports = router