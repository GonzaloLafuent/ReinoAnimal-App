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
app.use(express.urlencoded({ extended: false }));

const alimentoSueltoRouter = require("./routes/alimentoSuelto")
app.use("/alimentoSuelto",alimentoSueltoRouter)

const dogCenterRouter = require("./routes/dogCenter")
app.use("/dogCenter", dogCenterRouter)

const piedrasRouter = require("./routes/piedras")
app.use("/piedras",piedrasRouter)

const royalCaninRouter = require("./routes/royalCanin")
app.use("/royalCanin",royalCaninRouter)

const vitalCanRouter = require("./routes/vitalCan")
app.use("/vitalCan",vitalCanRouter)

app.listen(server_port, () => {
    console.log("App is running in port: " + server_port)  
})

