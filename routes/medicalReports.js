const express = require('express')
const Controller = require('../controller/index')
const router = express.Router()

router.get('/showMedicalRecords', Controller.medicalRecord)

module.exports = router