import { UserModel } from "../models/authModels.js";
import { comparePasswords, hashPassword } from "../utils/passwordHelper.js";

const createUserController = async (req, res) => {
  const { firstname, lastname, email, password, age } = req.body;
  const hashedPassword = await hashPassword(password);

  const userData = {
    firstname,
    lastname,
    email,
    password: hashedPassword,
    age,
  };
  const result = await UserModel.createUser(userData);
  res
    .status(201)
    .send({ message: "User created successfully!", data: result.rows[0] });
};

const findByEmailController = async (req, res) => {
  const { email, password } = req.body;

  const result = await UserModel.findByEmail(email);
  const hashedPassword = result.rows[0].password;
  const isSamePassword = await comparePasswords(password, hashedPassword);
  console.log("RESULT ===", isSamePassword);
};

export { createUserController, findByEmailController };
