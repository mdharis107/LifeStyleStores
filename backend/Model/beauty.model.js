const mongoose = require("mongoose");

const beautySchema = new mongoose.Schema({
    img : String,
    price : Number,
    productName : String,
    discount: Number,
    size: String,
    color: String,
});


const Beauty = mongoose.model("beauty",beautySchema);

module.exports = {Beauty}