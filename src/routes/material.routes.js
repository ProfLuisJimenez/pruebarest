import { Router } from "express";
import {methods as materialController} from "./../controllers/material.controllers";

const router=Router();

router.get("/",materialController.getmaterial);
router.post("/",materialController.addmaterial);

export default router;