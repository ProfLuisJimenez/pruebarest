import express from "express";
import morgan from "morgan";
import checadorRoutes from "./routes/checador.routes.js";

const app = express();
const hbs = require('hbs');
const bodyParser = require('body-parser');

//settings
app.set("port",3000);
app.set('views', __dirname +'/views');
app.set('view engine','hbs');
hbs.registerPartials(__dirname + '/views/partials', function (err){});
app.use(express.static(__dirname + '/public'));

//middlewares
app.use(morgan("dev"));
app.use(express.json());

//Ruta base
app.use("/checador", checadorRoutes);

export default app;