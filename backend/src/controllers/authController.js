import { UserModel } from "../models/authModels.js";
import bcrypt from "bcrypt";

const createUserController = async (req, res) => {
  const saltRounds = 10;
  const { firstname, lastname, email, password, age } = req.body;

  const hashedPassword = await bcrypt.hash(password, saltRounds);

  const userData = {
    firstname,
    lastname,
    email,
    password:hashedPassword,
    age,
  };
  const result = await UserModel.createUser(userData);
  res
    .status(201)
    .send({ message: "User created successfully!", data: result.rows[0] });
};

export { createUserController };
