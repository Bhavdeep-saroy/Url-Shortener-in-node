import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser";

const app = express();

app.use(cors({ origin: "*", credentials: true }))
app.use(express.json({ limit: "22kb" }))
app.use(express.urlencoded({ extended: true, limit: "22kb" }))
app.use(express.static('public'))
app.use(cookieParser())


import urlRouter from './routes/url.routes.js'
app.use("/api/v1/url", urlRouter)

export { app }


