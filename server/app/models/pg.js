const mongoose = require('mongoose')
const Schema = mongoose.Schema

const pgSchema =  new Schema({
    createdAt:{
        type:Date,
        default:Date.now
    },
    pgName:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    address:{
        type:String,
        required:true
    },
    phone:{
        type:String,
        required:true
    },
    licenseNumber:{
        type:String,
        required:true
    },
    ownerName:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    }
})

const Pg = mongoose.model('Pg',pgSchema)
module.exports = Pg