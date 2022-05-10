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
        if(resultAggregate[0].type.length===1)
        return resultAggregate
        else{
            const res = await this.getDoubleTypeInfo(resultAggregate[0].type)
            console.log('pdsie',res)
            resultAggregate[0].typeData=[res]
            return resultAggregate
        }
    },
    getEvolutionLine: async function(Candy){
        try{
            var evolutoionLine = await pokemonModel.aggregate([
                {
                    $match:{
                        'candy':Candy
                    }
                },
                {
                    $lookup:{
                        from:'pokemons',
                        let:{name:'$name'},
                        foreignField:'candy',
                        localField:'candy',
                        pipeline:[{
                            $match:{
                                $expr:{
                                    $ne:["$name","$$name"]
                                }
                            }
                        }],
                        as:'EvolutionLine'
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
                                            $in:["$pokemonType","$$type"]
                                    }
                                }
                            }
                        ],
                        as:'typeData'
                    }
                }
            ])
        } catch(err){
            console.log(err)
        }
        return evolutoionLine
    },
    getDoubleTypeInfo: async function(type){
        console.log(type)
        const res1 = await types.find({pokemonType:type[0]})
        const res2 = await types.find({pokemonType:type[1]})
        console.log(res1[0])
        let finalResult={
            effectveAgainst:[...new Set([...res1[0].effectiveAgainst ,...res2[0].effectiveAgainst])],
            weakAgainst:[...new Set([...res1[0].weakAgainst ,...res2[0].weakAgainst])],
            resistance:[...new Set([...res1[0].resistance ,...res2[0].resistance])],
            immuneDMG:[],
            immuneATK:[],
            twiceWeak:[],
            twiceEffective:[]
        }
        for(let i=0;i<res1[0].effectiveAgainst.length;i++){
            if(res2[0].effectiveAgainst.includes(res1[0].effectiveAgainst[i]))
                finalResult.twiceEffective.push(res1[0].effectiveAgainst[i])
        }
        for(let i=0;i<res1[0].weakAgainst.length;i++){
            if(res2[0].weakAgainst.includes(res1[0].weakAgainst[i]))
                finalResult.twiceWeak.push(res1[0].weakAgainst[i])
            if(res2[0].resistance.includes(res1[0].weakAgainst[i]))
                finalResult.weakAgainst = finalResult.weakAgainst.filter(type=> type!==res1[0].weakAgainst[i])
        }
        for(let i=0;i<res2[0].weakAgainst.length;i++){
            if(res1[0].resistance.includes(res2[0].weakAgainst[i]))
                finalResult.weakAgainst = finalResult.weakAgainst.filter(type=> type!==res2[0].weakAgainst[i])
        }
        for(let i=0;i<res1[0].resistance.length;i++){
            if(res2[0].weakAgainst.includes(res1[0].resistance[i]))
                finalResult.resistance = finalResult.resistance.filter(type=> type!==res1[0].resistance[i])
        }
        for(let i=0;i<res2[0].resistance.length;i++){
            if(res1[0].weakAgainst.includes(res2[0].resistance[i]))
                finalResult.resistance = finalResult.resistance.filter(type=> type!==res2[0].resistance[i])
        }
        return finalResult
    },
    getDoubleTypeInfoWithLookup: async function(type){
        const type1 = type[0]
        const type2 = type[1]
        const typeData = await types.aggregate([{
            $match:{
                'pokemonType':type1
                // $or:[
                //     {'pokemonType':type1},
                //     {'pokemonType':type2}
                // ]
            },
        },
            {
                $lookup:{
                    from:'types',
                    let:{resistance:'$resistance',weakAgainst:'$weakAgainst'},
                    pipeline:[{
                        $match:{
                            'pokemonType':type2,
                            $expr:{
                                "$not": {$in:['$weakAgainst','$$resistance']}}
                            }
                        }],
                    as:'weakAgainst'
                }
            },
            // },
            {
                $project:{
                    weakAgainst:'$weakAgainst.weakAgainst',
                }
            }
        ])
    return typeData
    }
}