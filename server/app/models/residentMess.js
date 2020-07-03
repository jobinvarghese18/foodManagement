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
    timing:{
        type:String,
        enum:['breakfast','lunch','dinner'],
        required:true
    },
    vegNonVeg:{
        type:String,
        required:true
    }
})
residentMessSchema.pre('save', function(next,req) {
    
    next()
  })

const ResidentMess = mongoose.model('ResidentMess',residentMessSchema)
module.exports = ResidentMess