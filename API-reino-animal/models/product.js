const mongoose = require("mongoose")

const productSchema = new mongoose.Schema({
    description: {
        type: String,
        required: true
    },
    price_sale: {
        type: Number,
        require: true
    },
    price_bought: {
        type: Number,
        require: true
    },
    stock: {
        type: Number,
        require: true
    },
})

module.exports = mongoose.model("Product", productSchema)