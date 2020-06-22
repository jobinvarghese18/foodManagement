const express = require('express')
const router = express.Router()
const { authenticateUser,authenticatePg } = require('../app/middlewares/authentication')
const usersController = require('../app/controllers/usersController')
const pgController = require('../app/controllers/pgController')

router.post('/user/register',usersController.register)
router.post('/user/login',usersController.login)
router.get('/user/account',authenticateUser,usersController.account)



///------------PGS------
router.post('/pg/register',pgController.register)
router.post('/pg/login',pgController.login)
router.get('/pg/account',authenticatePg,pgController.account)
module.exports = router