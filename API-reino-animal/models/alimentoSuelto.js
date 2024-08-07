const mongoose = require("mongoose")

const alimentoSueltoSchema = new mongoose.Schema({
    descripcion:{
        type: String,
        require: true
    },
    marca:{
        type: String,
        require: true
    },
    rubro:{
        type: String,
        require: true
    },
    //Ver que otro campo agregar
})

module.exports = mongoose.model("AlimentoSuelto",alimentoSueltoSchema)