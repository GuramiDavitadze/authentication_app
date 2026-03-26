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
};
