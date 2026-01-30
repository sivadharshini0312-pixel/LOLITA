import { connectDB } from "./Db/db.js";
import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import userRoute from "./Routes/userRoutes.js";
import authUserRoute from "./Routes/authUserRoutes.js";
dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;
// middlware 
app.use(express.json())
app.use(cors())
//connectivity
connectDB()
// routes definition
app.use('/api/user', userRoute);
app.use('/api/auth', authUserRoute)
// http://localhost:5000/api/user/sighup
app.listen(PORT, () => {
    console.log(`your server is runing in ${PORT}`);
})