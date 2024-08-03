import express from "express";
import cors from "cors";
import { config } from "dotenv";
import { dbConnection } from "./database/dbConnection.js";
import userRouter from "./routes/userRouter.js";
import { errorHandle } from "./controller/userController.js";

const app = express();

app.use(express.json());
app.use(cors());

config({path:'./config/config.env'});

app.use("/user",userRouter);
app.get("*",errorHandle);


dbConnection();

export default app;