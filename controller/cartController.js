var mongoose = require('mongoose')
var cart = require('../model/cartModel')
var cartService = require('../services/cartServices')

module.exports = {
    cartItes: async function(req,res){
        var result = await cartService.findItem(req.body.userId)
        res.send(result)
    },
    addItem: async function(req,res){
        var result = await cartService.addToCart(req)
        res.send(result)
    }
}

// module.exports = function(app){
//     app.use(bodyParser.json())
//     app.use(bodyParser.urlencoded({extended:true}))

//     app.post('/api/getCartItems',cors(),function(req,res){
//         cart.find({userId:mongoose.mongo.ObjectId(req.body.userId)},function(err,result){
//             res.send(result)
//         })
//     })
//     app.post('/api/addToCart',cors(),function(req,res){

//         cart.findOne({ userId:mongoose.mongo.ObjectId(req.body.userId),
//             prodId:mongoose.mongo.ObjectId(req.body.prodId)},function(err,result){
//                 if(result){
//                     cart.findByIdAndUpdate(result._id,{quantity:result.quantity+1},function(err,result){
//                         if(err) throw err
//                         res.send(result)
//                     })
//                 }
//                 else{
//                     var crt = new cart({
//                     userId:mongoose.mongo.ObjectId(req.body.userId),
//                     prodId:mongoose.mongo.ObjectId(req.body.prodId),
//                     quantity:1
//                 })
//                 crt.save(function(err,result){
//                     if(err) throw err
//                     res.send(result)
//                 })
//             }
//             })

//     })
// }