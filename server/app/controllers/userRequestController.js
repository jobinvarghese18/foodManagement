const UserRequest = require('../models/usersRequest')
const userRequestController = {}


userRequestController.request = (req,res)=>{
    const body = req.body
    body.userId = req.user._id
    body.username =  req.user.username

    console.log(req.user)
    const userRequest = new UserRequest(body)
    userRequest.save()
    .then((userRequest)=>{
        res.json(userRequest)
    })
    .catch((err)=>{
        res.json(err)
    })
}

userRequestController.list  = (req,res)=>{
    UserRequest.find()
    .then((UserRequests)=>{
        res.json(UserRequests)
    })
    .catch((err)=>{
        res.json(err)
    })
}

userRequestController.update = (req,res)=>{
    const id = req.params.id
    const body = req.body
    body.pgId =  req.pg._id
    console.log(body)
    UserRequest.findOneAndUpdate({userId:id},body,{new:true})
    .then((userRequest)=>{
        res.json(userRequest)
    })
    .catch((err)=>{
        res.json(err)
    })

}

userRequestController.destroy = (req,res)=>{
    const id = req.params.id
    UserRequest.findOneAndRemove({userId:id})
    .then((userRequest)=>{
        res.json(userRequest)
    })
    .catch((err)=>{
        res.json(err)
    })
}

module.exports = userRequestController