const express = require('express')
const router = require('./routes')
const session = require('express-session')
const app = express()
const port = 3000

app.set('view engine', 'ejs')
app.use(express.urlencoded({extended:false}))
  
app.use(session({
  secret : 'Healty-Tech',
  resave : false,
  saveUninitialized : true, 
  cookie : { secure : false, sameSite: true}
}))
app.use('/', router)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})