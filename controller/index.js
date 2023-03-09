// const status = require('../helper');
const bcryptjs = require('bcryptjs')
const { User, UserDetail, MedicalRecord } = require('../models')
const { Op } = require('sequelize')

class Controller {
  static home(req, res) {
    res.render('home')
  }

  static registerForm(req, res) {
    const { errMsg } = req.query
    res.render('register', { errMsg })
  }

  static registerPost(req, res) {
    const { email, password, role } = req.body
    User.create({ email, password, role })
      .then((data) => {
        res.redirect(`/register/details?UserId=${data.id}`)
      })
      .catch(err => {
        if (err.name === 'SequelizeValidationError' || err.name==="SequelizeUniqueConstraintError") {
          const errMsg = err.errors.map(el => el.message)
          res.redirect(`/register?errMsg=${errMsg}`)
        } else {
          res.send(err)
        }
      })
  }

  static registerDetailForm(req, res) {
    // console.log('ini dari form detail')
    const { errMsg, UserId } = req.query
    res.render('register-detail', { errMsg, UserId })
  }

  static registerDetailPost(req, res) {
    let id = req.query.UserId
    const { fullname, address, dateOfBirth, phone, gender } = req.body

    UserDetail.create({ fullname, address, dateOfBirth, phone, gender, UserId: id })
      .then(() => {
        res.redirect('/login')
      })
      .catch(err => {
        if (err.name === 'SequelizeValidationError') {
          const errMsg = err.errors.map(el => el.message)
          res.redirect(`/register/details?errMsg=${errMsg}`)
        } else {
          res.send(err)
        }
      })
  }

  static login(req, res) {
    const { errMsg } = req.query
    res.render('login', { errMsg })
  }

  static loginPost(req, res) {
    const { email, password } = req.body
    User.findOne({ where: { email: email } })
      .then(Userdata => {
        if (Userdata) {
          if (bcryptjs.compareSync(password, Userdata.password)) {
            req.session.email = Userdata.email
            // // req.session.password = Userdata.password
            req.session.role = Userdata.role
            const { role } = Userdata
            // res.send(Userdata)
            return res.redirect(`/${role}/${Userdata.id}`)
          } else {
            const errMsg = 'password is invalid!'
            return res.redirect(`/login?errMsg=${errMsg}`)
          }
        } else {
          const errMsg = 'email is not registered!'
          return res.redirect(`/login?errMsg=${errMsg}`)
        }
      })
      .catch(err => res.send(err))
  }

  static logOut(req, res) {
    req.session.destroy(err => {
      if (err) {
        res.send(err)
      } else {
        res.redirect('/')
      }
    })
  }

}
module.exports = Controller