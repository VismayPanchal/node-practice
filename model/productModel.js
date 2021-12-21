var mongoose  = require('mongoose')

var products = new mongoose.Schema({
    name:String,
    description:String,
    image:String,
    brand:String,
    category:String,
    price:Number,
    stockAvailable:Number
})

var PRODUCTS = mongoose.model('product',products)

module.exports = PRODUCTS