const { User, UserDetail, MedicalRecord } = require('../models')
const { Op } = require('sequelize')

class UserController{
    static medicalRecord(req, res) {
        MedicalRecord.findAll()
          .then(medical => res.render('medical', { medical }))
          .catch(err => res.send(err));
      }
      static addMedical(req, res) {
        MedicalRecord.findAll()
          .then(medical => res.render('add-medical', { medical }))
          .catch(err => res.send(err));
      }
    
      static addMedicalPost(req, res) {
        MedicalRecord.create(req.body)
          .then(_ => res.redirect('/medical'))
          .catch(err => res.send(err))
      }
}

module.exports = UserController