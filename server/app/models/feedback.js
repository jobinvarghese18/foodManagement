const mongoose = require('mongoose')
const Schema = mongoose.Schema

const feedbackSchema = new Schema({
    username:{
        type:String,
        required:true
    },
    pgId:{
        type:String
    },
    userId:{
        type:String
    },
    feedbackBody:{
        type:String,
        required:true
    }
})

const Feedback = mongoose.model('Feedback',feedbackSchema)