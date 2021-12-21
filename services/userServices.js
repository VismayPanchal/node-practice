var user = require('../model/userModel')

module.exports ={
    loginHandler: function(username){
        var userFound = user.findOne({username:username})
        return userFound
    },
    registerHandler : function(data){
        var register = data.save()
        return register
    }
}