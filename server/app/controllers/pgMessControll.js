const PgMess = require('../models/pgMess')
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