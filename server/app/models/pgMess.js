const mongoose = require('mongoose')
const Schema = mongoose.Schema

const messSchema = new Schema({
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
        enum:['veg','non-veg'],
        required:true
    },
    timeOfServing:{
        type:String,
        required:true
    },
    servedDate:{
        type:String,
        required:true
    },
    pg:{
        type:Schema.Types.ObjectId,
        ref:'Pg',
        required:true
    }
})

const PgMess = mongoose.model('PgMess',messSchema)
module.exports = PgMess