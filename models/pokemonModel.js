var mongoose = require('mongoose')

var type = mongoose.Schema({
    
        id: Number,
        num: String,
        name: String,
        img: String,
        type: [{type:String}],
        height: String,
        weight: String,
        candy: String,
        candy_count: Number,
        egg: String,
        spawn_chance: Number,
        avg_spawns: Number,
        spawn_time: String,
        multipliers: [{type:Number}],
        weaknesses: [{type:String}],

})


var Pokemons = mongoose.model('Pokemons',type)

module.exports = Pokemons