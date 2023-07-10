import { Pet, PetCreateInput, PetUpdateInput } from "@/protocols/pet";
import prisma from "@/database";

export async function getAll(): Promise<PetUpdateInput[]> {
  return await prisma.pet.findMany({
    select: {
      id: true,
      type: true,
      name: true,
      age: true,
      owner: {
        select: {
          id: true,
          name: true,
        },
      },
      address: {
        select: {
          id: true,
          street: true,
          city: true,
          state: true,
        },
      },
    },
  });
}

export async function getById(id: number): Promise<PetUpdateInput> {
  return await prisma.pet.findUnique({
    where: { id },
    select: {
      id: true,
      type: true,
      name: true,
      age: true,
      owner: {
        select: {
          id: true,
          name: true,
        },
      },
      address: {
        select: {
          id: true,
          street: true,
          city: true,
          state: true,
        },
      },
    },
  });
}

export async function create(pet: PetCreateInput) {
  return await prisma.pet.create({
    data: pet,
  });
}

export async function update(id: number, pet: PetUpdateInput) {
  return await prisma.pet.update({
    where: { id },
    data: pet,
  });
}

export async function remove(id: number) {
  return await prisma.pet.delete({
    where: { id },
  });
}
