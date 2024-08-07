const express = require("express")
const router = express.Router()
const Piedras = require("../models/piedras")

router.get("/", async (request,response) => {
    try{
        const piedras = await Piedras.find()
        response.status(200),json(piedras)
    } catch(error){
        response.status(500).json({message:error.message})
    }
})

router.post("/",async (request,response)=>{
    const piedra = new Piedras({
        descripcion: request.body.descripcion,
        costo: request.body.costo,
        venta: request.body.venta
    })
    try{
        await piedra.save()
        response.status(200).json("Producto cargado con exito")
    } catch (error){
        response.status(500).json({message:error.message})
    }
})