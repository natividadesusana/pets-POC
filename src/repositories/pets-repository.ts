import { Pet, PetCreateOrUpdate } from "@/protocols/pet";
import connection from "@/database";

export async function getAll() {
  const query = `SELECT * FROM pets`;
  const result = await connection.query<Pet>(query);

  return result.rows;
}

export async function getById(id: number) {
  const query = `SELECT * FROM pets WHERE id = $1`;
  const result = await connection.query<Pet>(query, [id]);

  return result.rows[0];
}

export async function create(pet: PetCreateOrUpdate) {
  const { type, name, age } = pet;
  const query = `INSERT INTO pets (type, name, age) VALUES ($1, $2, $3)`;
  const result = await connection.query<Pet>(query, [type, name, age]);

  return result.rowCount;
}

export async function update(id: number, pet: PetCreateOrUpdate) {
  const { type, name, age } = pet;
  const query = `
    UPDATE pets
    SET
      type = $1,
      name = $2,
      age = $3
    WHERE id = $4
  `;
  const result = await connection.query(query, [type, name, age, id]);

  return result.rowCount;
}

export async function remove(id: number) {
  const query = `DELETE FROM pets WHERE id = $1`;
  const result = await connection.query(query, [id]);

  return result.rowCount;
}
