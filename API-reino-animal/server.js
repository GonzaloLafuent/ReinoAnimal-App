require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose") 

const app = express()

const server_port = 3000

//mongoose.connect(process.env.DATABASE_URL)

app.use(express.json())

const productsRouter = require("./routes/products")

app.use("/products",productsRouter)

app.listen(server_port, () => {
    console.log("App is running in port: " + server_port)  
})

