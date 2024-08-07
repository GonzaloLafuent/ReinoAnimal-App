const mongoose = require("mongoose")

const royalCaninSchema = new mongoose.Schema({
    codigo:{
        type: String,
        require: true
    },
    descripcion:{
        type: String,
        require: true
    },
    costo:{
        type: Number,
        require: true
    },
    venta:{
        type: Number,
        require: true
    }
})

module.exports = mongoose.model("RoyalCanin",royalCaninSchema)