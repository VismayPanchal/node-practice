var jwt = require("jsonwebtoken");
var config = require("../config/config.json");
module.exports = function (req, res, next) {
  try {
    var tkn = req.headers.authorization
    var token = ''+tkn.split(' ')[1]
    if (!token) {
      return res
        .status(404)
        .json({ message: "Authentication token not found" });
    } else {
      try {
        var payload = jwt.verify(token, config.secretToken);
        req.body.userId = payload;
        next();
      } catch (err) {
        return res.status(401).json({ message: "token not authorised" });
      }
    }
  } catch (err) {
    res.send(err);
  }
};
