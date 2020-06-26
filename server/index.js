const express = require('express')
const port = 3030
const app = express()
const cors = require('cors')
const path = require('path')

app.use(express.json())
app.use(cors())
app.use(express.static('uploads'))
app.use('/static', express.static('uploads'))
app.use('/static', express.static(path.join(__dirname, 'uploads')))

app.use("/uploads",express.static("uploads"))

//Stup DB
const configureDB = require('./config/configureDatabase')
configureDB()

const routes = require('./config/routes')
app.use('/',routes)

app.get("*",(req,res)=>{
    console.log(__dirname)
    res.sendFile(path.join(__dirname +"/uploads"))
})
app.listen(port,()=>{
    console.log('listening to port',port)
})