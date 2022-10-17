import express from "express";
 

import cors from "cors";
import connectDb from "./config/connectdb.js"

import userRoutes from "./routes/userRoutes.js"


const port=8000
const database_url="mongodb://localhost:27017/ginin"
 

const app=express()
 
//cores policy
app.use(cors())

//database connection
connectDb(database_url)

//json
app.use(express.json())

//load routes
app.get("/",(req,res)=>{
   res.send("<h2>welcome to ginin</h2>")
})
app.use('/api/user',userRoutes)
 
 app.listen(port,()=>{
    console.log("server started")
 })

 