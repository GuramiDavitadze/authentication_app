import { pool } from "../config/db.js";

export const UserModel = {
  createUser: async (userData) => {
    const { firstname, lastname, email, password, age } = userData;
    try {
      const result = pool.query(
        `INSERT INTO users (firstname,lastname,email,password,age) VALUES ($1,$2,$3,$4,$5) RETURNING id,email`,
        [firstname, lastname, email, password, age],
      );
      return result;
    } catch (error) {
      console.log("ERROR", error);
    }
  },
  findByEmail: async (email) => {
    try {
      const query = `
        SELECT password FROM users WHERE email = ($1)
      `;
      const result = pool.query(query, [email]);
      return result;
    } catch (error) {
      console.log("ERROR", error);
    }
  },
};
