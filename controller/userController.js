var users = require('../model/userModel')
var userService = require('../services/userServices')
var bcrypt = require('bcrypt')
var jwt = require('jsonwebtoken')
var config = require('../config/config.json')

module.exports={
    login:async function(req,res){
            var result = await userService.loginHandler(req.body.username)
            bcrypt.compare(req.body.password,result.password,function(err,found){
                if(found===true) {
                    const token = jwt.sign(result._id.toString(), config.secretToken);
                    result.token = token
                    let user = JSON.parse(JSON.stringify(result));
                    Object.assign(user,{token:token})
                    res.json(user)
                //    res.send(result)
                }
                else res.send('login failed')
            })
        
    },
    register:async function(req,res){
        
        if(req.body.password === req.body.cpassword){
            bcrypt.hash(req.body.password,10,async function(err,hash){

                if (err) throw err
                var user = new users({
                    username:req.body.username,
                    password:hash
                })
                var response = await userService.registerHandler(user)
                res.send(response)  
            })
        }
        else
        {
            res.send('password doesn;t match')
        }
    }
}
// module.exports = function(app){
//     app.use(bodyParser.json())
//     app.use(bodyParser.urlencoded({extended:true}))
    
//     app.post('/api/register',function(req,res){
        
//         if(req.body.password === req.body.cpassword){
//             bcrypt.hash(req.body.password,10,function(err,hash){

//                 if (err) throw err
//                 var user = new users({
//                     username:req.body.username,
//                     password:hash
//                 })
//                 user.save(function(err,result){
//                     if(err) throw err
//                     res.send(result)
//                 })
//             })
//         }
//     })

//     app.post('/api/login',function(req,res){
//         users.findOne({username:req.body.username},function(err,result){
//             bcrypt.compare(req.body.password,result.password,function(err,found){
//                 if(found===true) res.send(result)
//                 else res.send('login failed')
//             })
//         })
//     })
// }