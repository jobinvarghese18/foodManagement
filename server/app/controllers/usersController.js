const User = require('../models/user')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken')
const usersController = {}

usersController.register = (req,res)=>{
  const body = req.body
  const user = new User(body)
  bcryptjs.genSalt()
  .then((salt)=>{
      bcryptjs.hash(user.password,salt)
      .then((encrypted)=>{
          user.password = encrypted
          user.save()
          .then((user)=>{
              res.json(user)
          })
          .catch((err)=>{
              res.json(err)
          })
      })
  })
  .catch((err)=>{
      console.log(err)
  })
}
usersController.list = (req,res)=>{
    User.find()
    .then((users)=>{
        res.json(users)
    })
    .catch((err)=>{
        res.json(err)
    })
}
usersController.login = (req,res)=>{
    const body = req.body
    User.findOne({email:body.email})
    .then((user)=>{
        if(!user){
            res.json({
                errors:"Invalid email or password"
            })
        }
        bcryptjs.compare(body.password,user.password)
        .then((match)=>{
            if(match){
                const tokenData = {
                    _id:user.id,
                    username:user.username,
                    email:user.email
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
                    errors:'invalid emial or password'
                })
            }
            

        })
    })
}

usersController.account = (req,res)=>{
    res.json(req.user)
}

///----------- Approve user -------

module.exports = usersController