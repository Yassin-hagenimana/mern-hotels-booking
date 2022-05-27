import express from 'express';
import mongoose from "mongoose"
import dotenv from "dotenv"
import cookieParser from 'cookie-parser';
import cors from 'cors';

import AuthRoutes from "./routes/auth.js"
import HotelsRoutes from "./routes/hotels.js"
import RoomsRoutes from "./routes/rooms.js"
import UsersRoutes from "./routes/users.js"

const app=express()
dotenv.config()

const connect=async()=>{
    try {
        await mongoose.connect(process.env.MONGODB_URI)
        console.log("Connected to mongoDB")
    } catch (er) {
        throw er
    }
}

mongoose.connection.on("disconnected",()=>{
    console.log("MongoDB disconnected")
})

//middlewares
app.use(cors())
app.use(cookieParser())
app.use(express.json())

app.use("/api/authentication",AuthRoutes)
app.use("/api/hotels",HotelsRoutes)
app.use("/api/rooms",RoomsRoutes)
app.use("/api/users",UsersRoutes)


app.use((err,req,res,next)=>{
const errorStatus=err.status || 500
const errorMessage=err.message || "Something went wrong"
return res.status(errorStatus).json(({
    success:false,
    status:errorStatus,
    message:errorMessage,
    stack:err.stack
}))
})
app.listen(8800,()=>{
    connect()
    console.log("Connected to backend!")
})