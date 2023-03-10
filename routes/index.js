const express = require('express')
const Controller = require ('../controller/index')
const router = express.Router()

router.get('/', Controller.home)
router.get('/register', Controller.registerForm)
router.post('/register', Controller.registerPost)
router.get('/register/details', Controller.registerDetailForm)
router.post('/register/details', Controller.registerDetailPost)
router.get('/login', Controller.login)
router.post('/login', Controller.loginPost)

router.use((req, res, next)=>{
    if(!req.session.email){
        const errMsg = 'Please login first !!!'
        res.redirect(`/login?errMsg=${errMsg}`)
    } else {
        next()
    }
})

router.use('/patients', require('./patient'))
router.use('/doctors', require('./doctor'))
router.get('/logout', Controller.logOut)

module.exports = router
