import { Router } from "express";
import petsRouter from "@/routers/pets-router";

const router = Router();

router.use(petsRouter);

export default router;