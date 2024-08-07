const mongoose = require("mongoose")

const vitalCanSchema = new mongoose.Schema({
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
    costoFinal:{
        type: Number,
        require: true,
    },
    venta:{
        type: Number,
        require: True
    }
})

module.exports = mongoose.model("VitalCan",vitalCanSchema)