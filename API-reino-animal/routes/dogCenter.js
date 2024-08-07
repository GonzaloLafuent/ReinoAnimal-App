const express = require("express")
const router = express.Router()
const DogCenter = require("../models/dogCenter")

router.get("/",async (request,response) => {
    try{
        const dogCenter = await DogCenter.find()
        response.status(200).json(dogCenter)
    } catch(error){
        response.status(500).json({message:error.message})
    }
})

router.post("/", async (request,response) => {
    const dogCenterProduct = new DogCenter({
        codigo: request.body.codigo,
        descripcion: request.body.descripcion,
        costo: request.body.costo,
        costoFinal: request.body.costoFinal,
        venta: request.body.venta
    })
    try{
        await dogCenterProduct.save()
        response.status(200).json({message:"Producto cargado con exito"})
    } catch(error){
        response.status(500).json({message:error.message})
    }
})

module.exports = router