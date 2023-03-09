const {User, Patient, MedicalRecord} = require ('./models')
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    User.findAll({
        include: [ 'MedicalRecordPatient']
    })
    .then(data=>{
        res.send(data)
    })
    .catch(err=>res.send(err))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})