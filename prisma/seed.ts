import prisma from "../src/database";

async function main() {
  const owner1 = await prisma.owner.create({
    data: {
      name: "Clodovaldo Smith",
    },
  });

  const owner2 = await prisma.owner.create({
    data: {
      name: "Felisberto Freire",
    },
  });

  const address1 = await prisma.address.create({
    data: {
      street: "123 Main Street",
      city: "New York",
      state: "NY",
    },
  });

  const address2 = await prisma.address.create({
    data: {
      street: "456 Elm Street",
      city: "Los Angeles",
      state: "CA",
    },
  });

  await prisma.pet.create({
    data: {
      type: "Bulldog Francês",
      name: "Bruce",
      age: 3,
      ownerId: owner1.id,
      addressId: address1.id,
    },
  });

  await prisma.pet.create({
    data: {
      type: "Golden Retriever",
      name: "Max",
      age: 2,
      ownerId: owner2.id,
      addressId: address2.id,
    },
  });
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
