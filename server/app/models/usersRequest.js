const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userRquestSchema = new Schema({
    userId:{
        type:String,
        required:true
    },
    username:{
        type:String,
        required:true
    },
    pgId:{
        type:String,
        required:true
    },
    approved:{
        type:Boolean,
        default:false
    }
})
const UserRequest = mongoose.model('UserRequest',userRquestSchema)
module.exports = UserRequest