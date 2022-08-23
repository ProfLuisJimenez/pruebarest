import express from "express";
import morgan from "morgan";
//routes
import materialRoutes from "./routes/material.routes.js";

const app=express();
app.set('views','./views');
app.set('view engine','pug');

//settings
app.set("port",3000);

//middlewares
app.use(morgan("dev"));
app.use(express.json());

//Routes
app.use("/api/materiales", materialRoutes);

export default app;