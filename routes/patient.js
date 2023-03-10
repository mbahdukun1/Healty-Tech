const express = require('express')
const UserController = require ('../controller/userRole')
const router = express.Router()

router.get('/:id', UserController.showUserDetail)
router.get('/:id/medicalRecords', UserController.medicalRecord)

module.exports = router