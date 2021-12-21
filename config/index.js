var config = require('./config.json')

module.exports = {
    getConnection : function(){
    return `mongodb+srv://${config.username}:${config.password}@cluster0.ilnx1.mongodb.net/test`
}}