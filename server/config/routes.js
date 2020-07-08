const express = require('express')
const router = express.Router()
const { authenticateUser,authenticatePg } = require('../app/middlewares/authentication')
const residentController                  = require('../app/controllers/residentMessController')
const usersController                     = require('../app/controllers/usersController')
const pgController                        = require('../app/controllers/pgController')
const upload                              = require('../app/middlewares/uploads')
const residentMessControll                = require('../app/controllers/residentMessController')
const pgMessControll                      = require('../app/controllers/pgMessControll')
const userRequestController               = require('../app/controllers/userRequestController')

router.post('/user/register',usersController.register)
router.post('/user/login',usersController.login)
router.get('/user/account',authenticateUser,usersController.account)
router.post('/user/residentMess',authenticateUser,residentMessControll.create)
router.get('/user/residentMess',authenticateUser,residentMessControll.displayAll)



///------------PGS------
router.post('/pg/register',pgController.register)
router.post('/pg/login',pgController.login)
router.get('/pg/account',authenticatePg,pgController.account)
router.get('/pg/pgs',authenticatePg,pgController.list)
router.put('/pg/:id',authenticatePg,upload.single('avatar'),pgController.update)
router.delete('/pg/:id',authenticatePg,pgController.destroy)
router.post('/pg/messdetails/',authenticatePg,pgMessControll.create)
router.get('/pg/messdetails',authenticatePg,pgMessControll.list)
//-----------User Request ------
router.post('/user/approve',authenticateUser,userRequestController.request)
router.get('/user/approve',authenticatePg,userRequestController.list)

module.exports = router