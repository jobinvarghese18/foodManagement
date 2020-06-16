const express = require('express')
const port = 3030
const app = express()
const cors = require('cors')

app.use(express.json())
app.use(cors())


//Stup DB
const configureDB = require('./config/configureDatabase')
configureDB()

const routes = require('./config/routes')
app.use('/',routes)

app.listen(port,()=>{
    console.log('listening to port',port)
})