export type Pet = {
  id: number;
  type: string;
  name: string;
  age: number;
  ownerId: number;
  addressId: number;
};

export type PetCreateInput = Omit<Pet, "id">;
export type PetUpdateInput = Partial<PetCreateInput>;
