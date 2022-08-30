import { Router } from "express";
import {methods as checadorController} from "../controllers/checador.controllers";

const router=Router();
router.get("/", function(req,res,next){
    res.render('index', {titulo:'puro pinche error'});
});
router.get("/usuarios",checadorController.listaUsuarios);
/* router.get("/material",materialController.getmaterial);
router.get("/material/:id",materialController.getmat);
router.post("/material",materialController.addmaterial);
router.delete("/material/:id",materialController.delmaterial);
router.put("/material/:id",materialController.updatematerial); */

export default router;