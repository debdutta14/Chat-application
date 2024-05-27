import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cookieParser from "cookie-parser";
const app = express();
const PORT = process.env.PORT || 5000;
//files
import authRoutes from "./routes/auth.routes.js"
import messageRoutes from "./routes/message.routes.js"
import userRoutes from "./routes/user.routes.js"
import connectToMongoDB from "./db/connectToMongoDb.js";

//middlewares
app.use(express.json());
app.use(cookieParser());



//routes
app.use("/api/auth",authRoutes);
app.use("/api/message",messageRoutes);
app.use("/api/users",userRoutes);


app.listen(PORT,()=>{
    connectToMongoDB();
    console.log(`Server started at ${PORT}`);
})
