const moongose = require("moongose")

const royalCaninSchema = new moongose.Schema({
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