const mongoose = require("mongoose")

const royalCaninSchema = new mongoose.Schema({
    codigo:{
        type: String,
        required: true
    },
    descripcion:{
        type: String,
        required: true
    },
    costo:{
        type: Number,
        required: true
    },
    venta:{
        type: Number,
        required: true
    }
})

module.exports = mongoose.model("RoyalCanin",royalCaninSchema)