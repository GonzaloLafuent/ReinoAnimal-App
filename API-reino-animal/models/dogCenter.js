const mongoose = require("mongoose")

const dogCenterSchema = new mongoose.Schema({
    codigo:{
        type: String,
        required: true
    },
    descripcion: {
        type: String,
        required: true
    },
    costo: {
        type: Number,
        required: true
    },
    costoFinal:{
        type: Number,
        required: true
    },
    venta: {
        type: Number,
        required: true,
    }
})

module.exports = mongoose.model("DogCenter",dogCenterSchema)