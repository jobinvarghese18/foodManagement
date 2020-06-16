const express = require('express')
const port = 3030
const app = express()

app.use(express.json())

//Stup DB
const configureDB = require('./config/configureDatabase')
configureDB()

const routes = require('./config/routes')
app.use('/',routes)

app.listen(port,()=>{
    console.log('listening to port',port)
})