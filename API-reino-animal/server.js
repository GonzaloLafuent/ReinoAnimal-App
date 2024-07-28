require("dotenv").config()
const express = require("express")
const mongoose = require("mongoose") 

const app = express()

const server_port = 3000

main().catch((err) => console.log(err));
async function main() {
    try{
        await mongoose.connect(process.env.DATABASE_URL);
        console.log("Succesfull connection to the Database")
    } catch(error) {
        console.log(error.message)
    }
}

app.use(express.json())

const productsRouter = require("./routes/products")

app.use("/products",productsRouter)

app.listen(server_port, () => {
    console.log("App is running in port: " + server_port)  
})

