const mongoose = require('mongoose')
const Schema = mongoose.Schema

const residentMessSchema = new Schema({
    createdAt:{
        type:Date,
        default:Date.now
    },
    residentName:{
        type:String,
        required:true
    },
    userId:{
        type:String
    },
    breakfast:{
        type:String,
        required:true
    },
    lunch:{
        type:String,
        required:true
    },
    dinner:{
        type:String,
        required:true
    },
    vegNonVeg:{
        type:String,
        required:true
    }
})

const ResidentMess = mongoose.model('ResidentMess',residentMessSchema)
module.exports = ResidentMess