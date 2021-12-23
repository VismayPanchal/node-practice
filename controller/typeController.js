var typeService = require('../services/pokeTypeService')

module.exports = {
    setInitVals :async function(req,res){

        const response = await typeService.setInitialVals()
        res.send(response)
    },
    getPokemonDetails : async function(req,res){
        const response = await typeService.getDetails(req.body.type)
        res.send(response)
    }
}