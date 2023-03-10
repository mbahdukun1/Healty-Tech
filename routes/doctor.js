const express = require('express')
const UserController = require('../controller/userRole')
const router = express.Router()

router.get('/:id', UserController.showUserDetail)
router.get('/:id/add', UserController.addMedical)
router.post('/:id/add', UserController.addMedicalPost)
router.get('/:id/medicalRecords', UserController.medicalRecordDoc)
router.get('/:id/edit/:idRecord', UserController.editMedicalForm)
router.post('/:id/edit/:idRecord', UserController.editMedicalPost)
router.get('/:id/delete/:idRecord', UserController.deleteMedical)

module.exports = router