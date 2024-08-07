const moongose = require("mongoose")

const dogCenterSchema = new moongose.Schema({
    codigo:{
        type: String,
        require: true
    },
    descripcion: {
        type: String,
        require: true
    },
    costo: {
        type: Number,
        require: true
    },
    costoFinal:{
        type: Number,
        require: true
    },
    venta: {
        type: Number,
        require: true,
    }
})

module.exports = moongose.model("DogCenter",dogCenterSchema)