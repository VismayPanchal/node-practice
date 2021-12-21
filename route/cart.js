var router = require('express').Router()
var auth = require('../middleware/auth')
var cartcontroller = require('../controller/cartController')

router.get('/getCartItem',auth,cartcontroller.cartItes)
router.post('/addItem',cartcontroller.addItem)

module.exports = {router}