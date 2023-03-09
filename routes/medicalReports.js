const express = require('express')
const Controller = require('../controller/index')
const router = express.Router()

router.get('/showMedicalRecords', Controller.medicalRecord)
router.get('/add/medical', Controller.addMedical)
router.post('/add/medical', Controller.addMedicalPost)


module.exports = router