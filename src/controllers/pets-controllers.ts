import { Request, Response } from "express";
import * as petsServices from "@/services/pets-services";
import { isIdValid } from "@/utils/id-validator";
import httpStatus from "http-status";
import { PetCreateInput } from "@/protocols/pet";

export async function getAll(req: Request, res: Response) {
  const pets = await petsServices.getAll();
  res.send(pets);
}

export async function getById(req: Request, res: Response) {
  const id = parseInt(req.params.id);
  if (!isIdValid(id)) return res.sendStatus(httpStatus.BAD_REQUEST);

  const pet = await petsServices.getById(id);
  res.send(pet);
}

export async function create(req: Request, res: Response) {
  const pet = req.body as PetCreateInput;
  await petsServices.create(pet);
  // const newPet = await petsServices.create(pet);

  res.sendStatus(httpStatus.CREATED);
  // res.status(httpStatus.CREATED).send(newPet);
}

export async function update(req: Request, res: Response) {
  const id = parseInt(req.params.id);
  if (!isIdValid(id)) return res.sendStatus(httpStatus.BAD_REQUEST);

  const pet = req.body as PetCreateInput;
  await petsServices.update(id, pet);

  res.sendStatus(httpStatus.OK);
}

export async function remove(req: Request, res: Response) {
  const id = parseInt(req.params.id);
  if (!isIdValid(id)) return res.sendStatus(httpStatus.BAD_REQUEST);

  await petsServices.remove(id);
  res.sendStatus(httpStatus.OK);
}
