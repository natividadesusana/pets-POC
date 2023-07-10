import { Pet } from "@/protocols/pet";
import joi from "joi";

const PetSchema = joi.object<Pet>({
  type: joi.string().required(),
  name: joi.string().required(),
  age: joi.number().min(0).required(),
  ownerId: joi.number().required(),
  addressId: joi.number().required()
});

export default PetSchema;
