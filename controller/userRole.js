const { User, UserDetail, MedicalRecord } = require('../models')
const { Op } = require('sequelize')
const formatter = require('../helpers/currencyFormatter')

class UserController {

  static showUserDetail(req, res) {
    const { id } = req.params
    User.findByPk(id, {
      include: UserDetail
    })
      .then(userDetail => {
        res.render('user-detail', { userDetail })
      })
      .catch(err => res.send(err));
  }

  static medicalRecord(req, res) {
    const id = req.params.id
    let nameTmp;
    let roleTmp;
    User.findByPk(id, {
      include: UserDetail
    })
      .then(user => {
        nameTmp = user.UserDetail.fullname
        return User.findByPk(id, { include: ['MedicalRecordDoctor'] })
      })
      .then(record => {
        res.render('medical-Patient', { record, nameTmp })

      })
      .catch(err => res.send(err));
  }

  static medicalRecordDoc(req, res) {
    const id = req.params.id
    let nameTmp;
    User.findByPk(id, {
      include: UserDetail
    })
      .then(user => {
        nameTmp = user.UserDetail.fullname
        return User.findByPk(id, { include: ['MedicalRecordPatient'] })
      })
      .then(record => {
        res.render('medical-Doctor', { record, nameTmp, id, formatter })

      })
      .catch(err => res.send(err));
  }

  static addMedical(req, res) {
    const id = req.params.id
  
    res.render('add-medical', { id })
  }

  static addMedicalPost(req, res) {
    const doctorId = req.params.id
    const { diagnosis, treatment, cost } = req.body
    
    MedicalRecord.create({ diagnosis, treatment, cost, DoctorId:doctorId })
      .then(() => res.redirect(`/doctors/${doctorId}/medicalRecords`))
      .catch(err => res.send(err))
  }

  static editMedicalForm(req, res) {
    let  {id, idRecord}  = req.params
    MedicalRecord.findByPk(idRecord)
      .then(medical => res.render('edit-medical', { medical, formatter, id }))
      .catch(err => res.send(err))
  }

  static editMedicalPost(req, res) {
    const { id, idRecord } = req.params
    const { diagnosis, treatment, cost } = req.body
    MedicalRecord.update({ diagnosis, treatment, cost }, { where: { id: idRecord } })
      .then(() => res.redirect(`/doctors/${id}/medicalRecords`))
      .catch(err => res.send(err))
  }

  static deleteMedical(req, res) {
    let {id, idRecord }= req.params
    MedicalRecord.destroy({ where: { id: idRecord } })
      .then(() => res.redirect(`/doctors/${id}/medicalRecords`))
      .catch(err => res.send(err))
  }
}

module.exports = UserController