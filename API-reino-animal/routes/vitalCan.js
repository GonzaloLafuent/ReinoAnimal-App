const express = require("express")
const router = express.Router()
const VitalCan = require("../models/vitalCan")

router.get("/", async (request,response) =>{
    try {
        const vitalCan = await VitalCan.find() 
        response.status(200).json(vitalCan)
    } catch(error){
        response.status(500).json({message:error.message})
    }
})

router.post("/", async (request,response) =>{
    const vitalCan = new VitalCan({
        codigo: request.body.codigo,
        descripcion: request.body.descripcion,
        costo: request.body.costo,
        costoFinal: request.body.costoFinal,
        venta: request.body.venta
    })
    try{    
        await vitalCan.save()
        response.status(200).json({message:"Producto cargado con exito"})
    } catch(error){
        response.status(500).json({message:error.message})
    }
})


module.exports = router