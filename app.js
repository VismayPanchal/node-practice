var express = require('express')
var bodyParser = require('body-parser')
var config = require('./config')
var typeRouter = require('./routes/typeRoute')
var cors = require('cors')

var app = express()
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
config.getConnection()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use('/api',cors(),typeRouter.router)
app.listen(4000)