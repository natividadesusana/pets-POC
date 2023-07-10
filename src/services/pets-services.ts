import { notFoundError } from "@/errors";
import { PetCreateInput, PetUpdateInput, Pet } from "@/protocols/pet";
import * as petsRepository from "@/repositories/pets-repository";

export async function getAll(): Promise<PetUpdateInput[]> {
  return await petsRepository.getAll();
}

export async function getById(id: number): Promise<PetUpdateInput> {
  const pet = await petsRepository.getById(id);
  if (!pet) {
    throw notFoundError();
  }
  return pet;
}

export async function create(pet: PetCreateInput) {
  return await petsRepository.create(pet);
}

export async function update(id: number, pet: PetUpdateInput) {
  await getById(id); // checks
  return await petsRepository.update(id, pet);
}

export async function remove(id: number) {
  await getById(id); // checks
  return await petsRepository.remove(id);
}
