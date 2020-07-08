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

// userRequestController.update = (req,res)=>{
//     const id = req.params.id
//     const body = req.body
//     UserRequest.findOneAndUpdate({_id:id,user})

// }

module.exports = userRequestController