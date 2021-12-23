var types = require('../models/typeModel')
var data = require('./EffectiveNessData')
module.exports = {
    setInitialVals : async function(){
       try{ var result =await types.create(data)
        return result}
        catch(err){
            console.log(err)
            return err
        }
    },
    getDetails : function(type){
        var result = types.findOne({pokemonType:type})
        return result
    }
}