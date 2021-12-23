var router = require('express').Router()
var typeController = require('../controller/typeController')

router.post('/',typeController.setInitVals)
router.post('/getDetails',typeController.getPokemonDetails)

module.exports = {router}