var product = require("../model/productModel");
var multer = require("multer");
var productService = require('../services/productServices')

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "./public/");
  },
  filename: (req, file, cb) => {
    const fileName = file.originalname.toLowerCase().split(" ").join("-");
    cb(null, file.fieldname + "-" + Date.now() + ".jpg");
  },
});

var upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
    if (
      file.mimetype == "image/png" ||
      file.mimetype == "image/jpg" ||
      file.mimetype == "image/jpeg"
    ) {
      cb(null, true);
    } else {
      cb(null, false);
      return cb(new Error("Only .png, .jpg and .jpeg format allowed!"));
    }
  },
});

module.exports = {
  index: async function index(req, res) {
    var prd = await productService.getAllProduct()
    res.send(prd)
  },
  find: async function (req, res) {
    var prd = await productService.findProduct(req.body.id)
    res.send(prd)
  },
  add: async function (req, res) {
    var response = await productService.addProduct(req)
    res.send(response)
  },
  imageUpload: upload.single('image'),
};
// module.exports = function (app) {
//     app.use(bodyParser.json())
//     app.use(bodyParser.urlencoded({extended:true}))
//   app.get("/api/setInitialProducts", function (req, res) {
//     const products = [
//       {
//         name: "cricket bat",
//         description: "season cricket bat",
//         image: "bat.jpg",
//         brand: "kookaburra",
//         category: "cricket",
//         price: 2000,
//         stockAvailable: 4,
//       },
//       {
//         name: "leather ball",
//         description: "season cricket ball",
//         image: "ball.jpg",
//         brand: "kookaburra",
//         category: "cricket",
//         price: 200,
//         stockAvailable: 4,
//       },
//     ];
//     product.create(products, function (err, result) {
//         if(err) throw(err)
//       res.send(result);
//     });
//   });

//   index:function index(req,res){
//     product.find(function(err,result){
//       if(err) throw err
//       res.send(result)
//     })
//   }

//   app.get('/api/allProducts',cors(),function(req,res){
//     product.find(function(err,result){
//       if(err) throw err
//       res.send(result)
//     })
//   })

//   app.post('/api/findProduct',cors(),function(req,res){
//     console.log(req.body)
//     product.find({_id:mongoose.mongo.ObjectId(req.body.id)},function(err,result){
//       console.log(result)
//       if(err) throw err
//       res.send(result)
//     })
//   })

//   app.post('/api/addProduct',cors(),function(req,res){
//       console.log(req.body)
//       const newprod = new product({
//           name:req.body.name,
//           description:req.body.description,
//           image:req.body.image,
//           brand:req.body.brand,
//           category:req.body.category,
//           price:req.body.price,
//           stockAvailable:req.body.stockAvailable
//       })
//       newprod.save(function(err,result){
//           if(err) throw err
//           res.send('succ')
//       })
//   })
//   app.post('/api/uploadImage',upload.single('image'),cors(),function(req,res){

//   })
// };
