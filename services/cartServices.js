var cart = require('../model/cartModel')
var mongoose = require('mongoose')
module.exports = {
    addToCart : function(req){
        cart.findOne({ userId:mongoose.mongo.ObjectId(req.body.userId),
            prodId:mongoose.mongo.ObjectId(req.body.prodId)},function(err,result){
                if(result){
                    cart.findByIdAndUpdate(result._id,{quantity:result.quantity+1},function(err,result){
                        if(err) throw err
                        res.send(result)
                    })
                }
                else{
                    var crt = new cart({
                    userId:mongoose.mongo.ObjectId(req.body.userId),
                    prodId:mongoose.mongo.ObjectId(req.body.prodId),
                    quantity:1
                })
                crt.save(function(err,result){
                    if(err) throw err
                    res.send(result)
                })
            }
            })
    },
    findItem : function(userId){
        var response = cart.find({userId:mongoose.mongo.ObjectId(userId)})
        return response;
    }
}