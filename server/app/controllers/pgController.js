const bcryptjs  = require('bcryptjs')
const jwt = require('jsonwebtoken')
const Pg = require('../models/pg')
const { findOneAndUpdate } = require('../models/pg')
var path = require("path");
var absolutePath = path.resolve("Relative file path")
const pgController = {}


pgController.register = (req,res)=>{
   const body = req.body
   const pg = new Pg(body)
   bcryptjs.genSalt()
   .then((salt)=>{
       bcryptjs.hash(pg.password,salt)
       .then((encrypted)=>{
           pg.password = encrypted
           pg.save()
           .then((pg)=>{
               res.json(pg)
           })
           .catch((err)=>{
               res.json(err)
           })
       })
   })
   .catch((err)=>{
       res.json(err)
   })
}

pgController.login = (req,res)=>{
    const body = req.body
    Pg.findOne({email:body.email})
    .then((pg)=>{
            if(!pg){
                res.json({
                    errors:"Invalid email or password"
                })
            }
            bcryptjs.compare(body.password,pg.password)
            .then((match)=>{
                if(match){
                    const tokenData = {
                        _id:pg.id,
                        pgName:pg.pgName,
                        email:pg.email
                    }
                    const token = jwt.sign(tokenData,'jo123',{
                        expiresIn:"2d"
                    })
                    res.json({
                        token:`Bearer ${token}`
                    })
                }
                else{
                    res.json({
                        errors:"invalid email or password"
                    })
                }
            })
    })
}


//---current PG details
pgController.account = (req,res)=>{
    res.json(req.pg)
}


///----List all the PGs
pgController.list = (req,res)=>{
    Pg.find()
    .then((pgs)=>{
        res.json(pgs)
    })
    .catch((err)=>{
        res.json(err)
    })
}

pgController.update = (req,res)=>{
    if(req.file){
        req.body.avatar = req.file.path
        //path.resolve(req.file.path)
    }
    const id = req.params.id
    const body = req.body
    Pg.findOneAndUpdate({_id:id},body,{new:true})
    .then((pg)=>{
           res.json(pg)
    })
    .catch((err)=>{
        res.json(err)
    })
}

pgController.destroy = (req,res)=>{
    const id = req.params.id
    Pg.findByIdAndRemove(id)
    .then((pg)=>{
        res.json(pg)
    })
    .catch((err)=>{
        res.json(err)
    })
}

module.exports = pgController