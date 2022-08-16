import express from "express";
import morgan from "morgan";

const app=express();

//settings
app.set("port",3000);

//middlewares
app.use(morgan("dev"));

export default app;