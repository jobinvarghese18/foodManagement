const mongoose = require('mongoose')
const Schema = mongoose.Schema

const messSchema = new SChema({
    createdAt:{
        type:Date,
        defualt:Date.now
    },
    dishName:{
        type:String,
        required:true
    },
    vegOrNonVeg:{
        type:String,
        required:true
    },
    timeOfServing:{
        type:String,
        required:true
    },
    servedDate:{
        type:String,
        required:true
    }
})

const Mess = mongoose.model('Mess',messSchema)
module.exports = Mess