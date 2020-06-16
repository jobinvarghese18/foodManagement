const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    createdAt:{
        type:Date,
        default:Date.now
    },
    username:{
        type:String,
        minlength:6,
        maxlength:10,
        unique:true,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    address:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    },
    state:{
        type:String,
        required:true
    },
    zip:{
        type:String,
        required:true
    },
    password:{
        type:String,
        minlength:6,
        maxlength:64,
        required:true
    }
})

const User = mongoose.model('User',userSchema)
module.exports = User