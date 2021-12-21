var product = require('../model/productModel')

module.exports ={
    getAllProduct:function(){
        var prod = product.find()
        return prod
    },
    findProduct:function(id){
        var prod = product.findById({_id:id})
        return prod 
    },
    addProduct:function(req){
        const newprod = new product({
            name: req.body.name,
            description: req.body.description,
            image: req.body.image,
            brand: req.body.brand,
            category: req.body.category,
            price: req.body.price,
            stockAvailable: req.body.stockAvailable,
          });
          var response = newprod.save();
        return response
    }
}