var mongoose = require('mongoose')

var user = new mongoose.Schema({
    username:String,
    password:String
})

var USER = mongoose.model('users',user)

module.exports = USER