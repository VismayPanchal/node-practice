var types = require('../models/typeModel')
var pokemonModel = require('../models/pokemonModel')
var data = require('./EffectiveNessData')
var pokemonDex = require('./pokemons')
module.exports = {
    setInitialVals : async function(){
       try{ var result =await types.create(data)
        return result}
        catch(err){
            console.log(err)
            return err
        }
    },
    getDetails : async function(type){
        var result = await types.findOne({pokemonType:type})
        console.log(result,type)
        return result
    },
    setInitialPokemons : async function(){
        try{
            var result = await pokemonModel.create(pokemonDex)
            return result
        } catch(err){
            console.log(err)
            return err
        }
    },
    getPokemonDetails : async function(name){
        // var result = await pokemonModel.findOne({name:name})
        try{var resultAggregate = await pokemonModel.aggregate([
            {
                $match:{
                    'name':name
                }
            },
            {

                $lookup:{
                    from:'types',
                    let:{type:'$type'},
                    pipeline:[
                        {
                            $match:{
                                $expr:{
                                    // type:{$in : type}
                                    // $and:[{
                                        $in:["$pokemonType","$$type"]
                                    // }]
                                }
                            }
                        }
                    ],
                    as:'typeData'
                }
            }
        ])
        }catch(err){
            console.log('emrror',err)
        }
        return resultAggregate
    }
}