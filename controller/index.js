// const status = require('../helper');
const {User, UserDetail, MedicalRecord} = require('../models')
const {Op} = require('sequelize')

class Controller {
    static medicalRecord (req,res) {
        MedicalRecord.findAll()
        .then(medical => res.render('medical', {medical}))
        .catch(err => res.send(err));
    }
}
module.exports = Controller