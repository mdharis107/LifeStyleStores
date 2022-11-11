const mongoose = require("mongoose");

const connection = mongoose.connect("mongodb://amitkumar:amitMaurya@ac-ybncvek-shard-00-00.scwn2fa.mongodb.net:27017,ac-ybncvek-shard-00-01.scwn2fa.mongodb.net:27017,ac-ybncvek-shard-00-02.scwn2fa.mongodb.net:27017/LifeStyleStore?ssl=true&replicaSet=atlas-grxp04-shard-0&authSource=admin&retryWrites=true&w=majority");

module.exports = {connection};