const ResidentMess = require('../models/residentMess')
const residentMessControll = {}

residentMessControll.create = (req,res)=>{
    const body = req.body
    body.userId = req.user._id
    const residentMess = new ResidentMess(body)
    residentMess.save()
    .then((residentMess)=>{
        res.json(residentMess)
    })
    .catch((err)=>{
        res.json(err)
    })
}

residentMessControll.displayAll = (req,res)=>{
     ResidentMess.find()
     .then((residentsMess)=>{
         res.json(residentsMess)
     })
     .catch((err)=>{
         res.json(err)
     })
}

module.exports  = residentMessControll