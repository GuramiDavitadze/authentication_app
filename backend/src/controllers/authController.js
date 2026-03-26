import { UserModel } from "../models/authModels.js";

const createUserController = async (req, res) => {
  const { firstname, lastname, email, password, age } = req.body;
  const userData = {
    firstname,
    lastname,
    email,
    password,
    age,
  };
  const result = await UserModel.createUser(userData);
  console.log("THis is result", result);

  res
    .status(201)
    .send({ message: "User created successfully!", data: result.rows[0] });
};

export { createUserController };
