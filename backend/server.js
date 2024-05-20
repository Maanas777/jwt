import 'dotenv/config'
import express from 'express'
import cors from 'cors'
import { ConnectMongodb } from './util/connection.js'
import auth from './routes/auth.js'
let app= express()
let port=process.env.PORT||4000
app.use(express.json())
app.use(cors())
app.use("/api/auth", auth);






app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})