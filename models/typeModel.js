var mongoose = require('mongoose')

var type = new mongoose.Schema({
    pokemonType:String,
    effectiveAgainst:[{type:String}],
    weakAgainst:[{type:String}],
    resistance:[{type:String}],
    immune:[{type:String}]
})

var Types = mongoose.model('Types',type)

module.exports = Types