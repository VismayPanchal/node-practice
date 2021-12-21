var router = require('express').Router()
var auth = require('../middleware/auth')
var authcontroller = require('../controller/userController')

router.post('/login',authcontroller.login)
router.post('/register',authcontroller.register)

module.exports = {router}