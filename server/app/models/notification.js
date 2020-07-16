const mongoose = require('mongoose')
const Schema = mongoose.Schema

const notificationSchema = new Schema({
    username:{
        type:String,
        required:true
    },
    pgId:{
        type:String
    },
    notificationBody:{
        type:String,
        required:true
    },
    userId:{
        type:String,
        
    }
})

const Notification = mongoose.model('Notification',notificationSchema)