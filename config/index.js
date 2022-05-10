const mongoose = require("mongoose");
var config = require("./config.json");

module.exports = {
  getConnection: async function () {
    try {
      const options = {
        dbName: "Pokemon",
        useUnifiedTopology: true,
        useNewUrlParser: true,
      };
      await mongoose.connect(config.MongoURI, options);
    } catch (error) {
      console.log(error);
    }
  },
};
