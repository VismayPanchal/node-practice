var express = require("express");
var mongoose = require("mongoose");
var config = require("./config");
var app = express();
var bodyParser = require('body-parser')
var prod = require("./route/product");
var auth = require('./route/auth')
var cart = require('./route/cart')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.removeHeader("x-powered-by");
  res.setHeader("Access-Control-Allow-Methods", "*");
  res.setHeader("Access-Control-Allow-Headers", "*");
  res.setHeader('Access-Control-Allow-Credentials','*')
  res.setHeader("Access-Control-Request-Headers","*")
  res.setHeader("Access-Control-Request-Methods","*")

  next();
});

mongoose.connect(config.getConnection());
app.use("/api/product", prod.router);
app.use('/api/Authenticate',auth.router)
app.use('/api/cart',cart.router)
app.listen(3044);
