import express from "express";
import morgan from "morgan";
//routes
import materialRoutes from "./routes/material.routes.js";

const app=express();

//settings
app.set("port",3000);

//middlewares
app.use(morgan("dev"));
app.use(express.json());

//Routes
app.use("/api/materiales", materialRoutes);

export default app;