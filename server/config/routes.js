const express = require('express')
const router = express.Router()
const { authenticateUser } = require('../app/middlewares/authentication')

const usersConroller = require('../app/controllers/usersController')
const usersController = require('../app/controllers/usersController')

router.post('/user/register',usersConroller.register)
router.post('/user/login',usersController.login)
router.get('/user/account',authenticateUser,usersConroller.account)

module.exports = router