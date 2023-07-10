# Pets POC
This is a proof-of-concept project for managing pets and their owners. It provides endpoints to perform CRUD operations on pets.

## 🛠️ Technologies

 ![Node.js](https://img.shields.io/badge/-Node.js-e6e6e6?style=for-the-badge&logo=node.js)&nbsp;
 ![TypeScript](https://img.shields.io/badge/-TypeScript-e6e6e6?style=for-the-badge&logo=typescript)&nbsp;
 ![Prisma](https://img.shields.io/badge/Prisma-e6e6e6?style=for-the-badge&logo=Prisma&logoColor=black)
 ![Express.js](https://img.shields.io/badge/Express.js-e6e6e6?style=for-the-badge&logo=express&logoColor=black)&nbsp;

## 🔸 Routes

#### 🔹 GET /pets
Retrieves a list of all pets.

    [
        {
            "id": 1,
            "type": "Bulldog Francês",
            "name": "Bruce",
            "age": 3,
            "owner": {
                "id": 1,
                "name": "Clodovaldo Smith"
            },
            "address": {
                "id": 1,
                "street": "123 Main Street",
                "city": "New York",
                "state": "NY"
            }
        },
        {
            "id": 2,
            "type": "Golden Retriever",
            "name": "Max",
            "age": 2,
            "owner": {
                "id": 2,
                "name": "Felisberto Freire"
            },
            "address": {
                "id": 2,
                "street": "456 Elm Street",
                "city": "Los Angeles",
                "state": "CA"
            }
        }
    ]

#### 🔹 GET /pets/:id
Retrieves a specific pet by its ID.\
URL Parameters:\
id: ID of the pet to retrieve.

    {
        "id": 2,
        "type": "Golden Retriever",
        "name": "Max",
        "age": 2,
        "owner": {
            "id": 2,
            "name": "Felisberto Freire"
        },
        "address": {
            "id": 2,
            "street": "456 Elm Street",
            "city": "Los Angeles",
            "state": "CA"
        }
    }


#### 🔹 POST /pets
Creates a new pet.
* type (string): Type of the pet.
* name (string): Name of the pet.
* age (number): Age of the pet.
* ownerId (number): ID of the owner associated with the pet.
* addressId (number): ID of the address associated with the pet.

Body:

    {
      "type": "Pet Type",
      "name": "Pet Name",
      "age": 3,
      "ownerId": 1,
      "addressId": 1
    }
  
#### 🔹 PUT /pets/:id
Updates an existing pet with the given ID.\
URL Parameters:\
id: ID of the pet to update.

* type (string): Updated type of the pet.
* name (string): Updated name of the pet.
* age (number): Updated age of the pet.
* ownerId (number): Updated ID of the owner associated with the pet.
* addressId (number): Updated ID of the address associated with the pet.

Body:

    {
      "type": "New Pet Type",
      "name": "New Pet Name",
      "age": 4,
      "ownerId": 2,
      "addressId": 2
    }

#### 🔹 DELETE /pets/:id
Deletes an existing pet with the given ID.\
URL Parameters:\
id: ID of the pet to delete.

Please ensure that the request bodies and parameters are formatted correctly according to the provided examples.
