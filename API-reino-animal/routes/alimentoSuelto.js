const express = require("express")
const router = express.Router()
const AlimentoSuelto = require("../models/alimentoSuelto")

router.get("/", async (request,response)=>{
    try{
        const alimentoSuelto = await AlimentoSuelto.find()
        response.status(200).json(alimentoSuelto)
    } catch(error){
        response.status(500).json({message:error.message})
    }
})

router.post("/", async (request,response) =>{
    const alimentoSuelto = new AlimentoSuelto({
        descripcion: request.body.descripcion,
        marca: request.body.marca,
        rubro: request.body.rubro,
    })
    try {
        await alimentoSuelto.save()
        response.status(200).json("Producto cargado con exito")
    } catch(error){
        response.status(500).json({message:error.message})
    }
})

module.exports = router