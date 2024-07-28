const express = require("express")
const router = express.Router()
const Product = require("../models/product")

module.exports = router


//Ruta para obtener todos los productos
router.get("/", async (request,response) => {
    try {
        const products = await Product.find()
        response.status(200).json(products) 
    } catch (error) {
        response.status(500).json({message:error.message})
    } 
})

//Ruta para obtener un solo producto
router.get("/:id", (request,response) => {

})

//Ruta para actualizar un producto
router.patch("/:id", (request,response) => {
    
})

//Ruta para agregar un producto
router.post("/", async (request,response) =>{
    const product = new Product({
        description: request.body.desciption,
        price_sale: request.body.price_sale,
        price_bought: request.body.price_bought,
        stock: request.body.stock
    })
    try{
        const newProduct = await product.save()
        res.status(201).json()
    } catch (error) {
        res.status(500).json({message:error.message})
    }
})