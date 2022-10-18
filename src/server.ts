import dotenv from "dotenv";
import express from 'express';
import routes from "./routes/v1/routes";

dotenv.config()

//пошли нахуй

const app = express()
const SERVER_PORT = process.env.SERVER_PORT || 4025
const SERVER_HOST = process.env.SERVER_HOST

app.use('/api/v1', routes)

app.listen(SERVER_PORT, () => {
    console.log('🟢 SERVER_START: ', `${SERVER_HOST}:${SERVER_PORT}`)
})