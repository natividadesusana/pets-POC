import { Router } from "express";
import * as petsController from "../controllers/pets-controllers";

const petsRouter = Router();

petsRouter.get("/pets", petsController.getAll);
petsRouter.get("/pets/:id", petsController.getById);
petsRouter.post("/pets", petsController.create);
petsRouter.put("/pets/:id", petsController.update);
petsRouter.delete("/pets/:id", petsController.remove);

export default petsRouter;
