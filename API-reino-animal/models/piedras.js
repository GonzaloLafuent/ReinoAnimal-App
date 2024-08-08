const mongoose = require("mongoose")

const piedrasSchema = new mongoose.Schema({
    descripcion: {
        type: String,
        required: true
    },
    costo: {
        type: Number,
        required: true
    },
    venta:{
        type: Number,
        required:true
    }
})

module.exports = mongoose.model("Piedras",piedrasSchema)
