var mongoose = require('mongoose')

var cart = new mongoose.Schema({
    userId:mongoose.mongo.ObjectId,
    prodId:mongoose.mongo.ObjectId,
    quantity:Number
})

var CART = mongoose.model('cart',cart)

module.exports = CART

