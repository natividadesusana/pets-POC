import { Router } from "express";
import * as petsController from "@/controllers/pets-controllers";
import { validateSchema } from "@/middlewares/schema-middlewares";
import PetSchema from "@/schemas/pet-schema";

const petsRouter = Router();

petsRouter.get("/pets", petsController.getAll);
petsRouter.get("/pets/:id", petsController.getById);
petsRouter.post("/pets", validateSchema(PetSchema), petsController.create);
petsRouter.put("/pets/:id", validateSchema(PetSchema), petsController.update);
petsRouter.delete("/pets/:id", petsController.remove);

export default petsRouter;
