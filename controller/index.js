// const status = require('../helper');
const {User, UserDetail, MedicalRecord} = require('../models')
const {Op} = require('sequelize')

class Controller {
    static home (req, res) {
        res.render('home')  
    }
    static medicalRecord (req,res) {
        MedicalRecord.findAll()
        .then(medical => res.render('medical', {medical}))
        .catch(err => res.send(err));
    }
    static addMedical (req, res) {
        MedicalRecord.findAll()
        .then(medical => res.render('add-medical', {medical}))
        .catch(err => res.send(err));
    }
    
    static addMedicalPost (req, res) {
        MedicalRecord.create(req.body)
            .then(_ => res.redirect('/medicalReports/showMedicalRecords'))
            .catch(err => res.send(err)) 
    }
    static readMedical(req, res){
        let {id} = req.params
        MedicalRecord.findAll({where: {id: id}})
            .then(medical => res.render('edit-medical', {medical}))
            .catch(err => res.send(err))
    }
    static editMedical(req, res){
        const {id} = req.params
        const {diagnosis,treatment,cost} = req.body
        MedicalRecord.update({diagnosis,treatment,cost}, {where: {id: id}})
            .then(_ => res.redirect('medicalReports/showMedicalRecords'))
            .catch(err => res.send(err))
    }

    static deleteMedical(req, res){
        let {id} = req.params
        MedicalRecord.destroy({where: {id: id}})
            .then(_ => res.redirect('/medicalReports/showMedicalRecords'))
            .catch(err => res.send(err))
    }
}
module.exports = Controller