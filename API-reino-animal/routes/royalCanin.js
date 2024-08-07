const express = require("express")
const router = express.Router()
const RoyalCanin = require("../models/royalCanin")

router.get("/", async (request,response) =>{
    try{
        const royalCanin = await RoyalCanin.find()
        response.status(200).json(royalCanin)
    } catch(error){
        response.status(500).json({message:error.message})
    }
})

router.post("/", async (request,response) =>{
    const royalCanin = new RoyalCanin({
        codigo: request.body.codigo,
        descripcion: request.body.descripcion,
        costo: request.body.costo,
        venta: request.body.venta
    })
    try {
        await royalCanin.save()
        response.status(200).json({message:"Producto cargado con exito"})
    } catch(error) {
        response.status(500).json({message:error.message})
    }
})

module.exports = router