var router = require('express').Router()
var typeController = require('../controller/typeController')

router.post('/',typeController.setInitVals)
router.post('/getDetails',typeController.getPokemonTypeDetails)
router.post('/getPokemonDetails',typeController.getPokemonDetails)
// router.post('/setPokemonData',typeController.setInitialPokemons)

module.exports = {router}