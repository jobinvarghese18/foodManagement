const express = require('express')
const router = express.Router()
const { authenticateUser } = require('../app/middlewares/authentication')
const pgController =  require('../app/controllers/pgController')
const usersConroller = require('../app/controllers/usersController')
const usersController = require('../app/controllers/usersController')
const pgContoller = require('../app/controllers/pgController')

router.post('/user/register',usersConroller.register)
router.post('/user/login',usersController.login)
router.get('/user/account',authenticateUser,usersConroller.account)



///------------PGS------
router.post('/pg/register',pgController.register)
router.post('/pg/login',pgContoller.login)

module.exports = router