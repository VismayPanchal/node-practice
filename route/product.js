var router = require('express').Router()
var product = require('../controller/productController')

router.get('/',product.index)

router.post('/find',product.find)

router.post('/add',product.add)

module.exports = {router}