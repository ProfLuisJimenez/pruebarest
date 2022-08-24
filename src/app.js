import express from "express";
import morgan from "morgan";

//routes
import materialRoutes from "./routes/material.routes.js";

const app=express();

//settings
app.set("port",3000);

//motores de plantilla
const hbs = require('hbs');
hbs.registerPartials(__dirname + '/views/partials', function (err){});
app.set('view engine','hbs');
app.set("views", __dirname +"/views");
app.use(express.static(__dirname + "/public"));

//middlewares
app.use(morgan("dev"));
app.use(express.json());

//Routes
app.use("/api/materiales", materialRoutes);

export default app;