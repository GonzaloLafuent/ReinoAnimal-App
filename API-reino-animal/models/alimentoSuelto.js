const mongoose = require("mongoose")

const alimentoSueltoSchema = new mongoose.Schema({
    descripcion:{
        type: String,
        required: true
    },
    marca:{
        type: String,
        required: true
    },
    rubro:{
        type: String,
        required: true
    },
    //Ver que otro campo agregar
})

module.exports = mongoose.model("AlimentoSuelto",alimentoSueltoSchema)