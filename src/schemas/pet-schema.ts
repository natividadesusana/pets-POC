import joi from "joi";

const PetSchema = joi.object({
  type: joi.string().required(),
  name: joi.string().required(),
  age: joi.number().min(0).required(),
});

export default PetSchema;
