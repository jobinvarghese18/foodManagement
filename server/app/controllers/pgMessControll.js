const PgMess = require('../models/pgMess')
const UserRequest = require('../models/usersRequest')
const pgMessControll = {}

//-----------Create---------
pgMessControll.create = (req,res)=>{
    const body = req.body
    body.pg = req.pg._id
    console.log(body)
    const pgMess = new PgMess(body)
    pgMess.save()
    .then((pg)=>{
        res.json(pg)
    })
    .catch((err)=>{
        res.json(err)
    })
}
//Display mess details for a particular user
pgMessControll.display = (req,res)=>{
    const id = req.user._id
    UserRequest.findOne({userId:id})
    .then((user)=>{
        if(!user.approved){
            res.json({
                errors:"You are not approved yet"
            })
        }
        const pgId = user.pgId
        console.log('hello')
        PgMess.find({pg:pgId})
        .then((pgMess)=>{
            res.json(pgMess)
        })
        .catch((err)=>{
            res.json(err)
        })
    })
    .catch((err)=>{
        console.log(err)
    })
}
//----------List All -------
pgMessControll.list = (req,res)=>{
    PgMess.find()
    .then((pgs)=>{
        res.json(pgs)
    })
    .catch((err)=>{
        res.json(err)
    })
}

module.exports = pgMessControll