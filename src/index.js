import connectDB from "../src/DB/index.js";
import dotenv from "dotenv";
import { app } from "../src/app.js"
import { nanoid } from "nanoid";
import urlExist from "url-exist";

dotenv.config({
    path: './.env'
})
connectDB()
    .then(() => {

        app.listen(process.env.PORT || 4003, () => {
            console.log(`Server is running : at port : ${process.env.PORT}`);
        })
    })
    .catch((err) => {
        console.log("MONGO DB COENNECTION FAILED !!! ", err)
    })

