var typeService = require('../services/pokeTypeService')

module.exports = {
    setInitVals :async function(req,res){

        const response = await typeService.setInitialVals()
        res.send(response)
    },
    getPokemonTypeDetails : async function(req,res){
        const response = await typeService.getDetails(req.body.type)
        res.send(response)
    },
    setInitialPokemons : async function(req,res){
        const response = await typeService.setInitialPokemons()
        res.send(response)
    },
    getPokemonDetails : async function(req,res){
        const response = await typeService.getPokemonDetails(req.body.name)
        res.send(response)
    },
    getEvolutionLine : async function(req,res){
        const response = await typeService.getEvolutionLine(req.body.candy)
        res.send(response)
    },
    getDoubleTypeInfo: async function(req,res){
        const response = await typeService.getDoubleTypeInfo(req.body.type)
        res.send(response)
    },
    getDoubleTypeInfoWithLookup : async function(req,res){
        const response = await typeService.getDoubleTypeInfoWithLookup(req.body.type)
        res.send(response)
    }
}
///https://bulbapedia.bulbagarden.net/wiki/Damage