require("dotenv").config()
const mongoose = require("mongoose")

const mongoURI = process.env.MONGO_URIMONGO;

async function dbConnect() {
    try {
        await mongoose.connect(mongoURI);
        console.log("Conexion exitosa");
    } catch (error) {
        console.log("Error al conectar");
    }
}

module.exports = {
    dbConnect
}