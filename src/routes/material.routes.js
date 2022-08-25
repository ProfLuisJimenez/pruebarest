import { Router } from "express";
import {methods as materialController} from "./../controllers/material.controllers";

const router=Router();
//materiales
router.get("/",materialController.getmaterial);
router.get("/:id",materialController.getmat);
router.post("/",materialController.addmaterial);
router.delete("/:id",materialController.delmaterial);
router.put("/:id",materialController.updatematerial);
//checador
router.get("/checador",materialController.checador);
//router.get("/checador/reporte",checadorReporte);

export default router;