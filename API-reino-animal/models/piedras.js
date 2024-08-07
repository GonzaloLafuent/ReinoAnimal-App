const mongoose = require("mongoose")

const piedrasSchema = new mongoose.Schema({
    descripcion: {
        type: String,
        require: true
    },
    costo: {
        type: Number,
        require: true
    },
    venta:{
        type: Number,
        require:true
    }
})

module.exports = mongoose.model("Piedras",piedrasSchema)
