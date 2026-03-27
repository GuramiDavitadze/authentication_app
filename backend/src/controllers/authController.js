import { UserModel } from "../models/authModels.js";
import { generateToken } from "../utils/jwtHelper.js";
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

  if (result.rowCount === 0)
    return res.status(401).send({ message: "Password or Email is wrong" });

  const { password: hashedPassword, id, ...data } = result.rows[0];
  const isSamePassword = await comparePasswords(password, hashedPassword);
  if (!isSamePassword) {
    return res.status(401).send({ message: "Password or Email is wrong" });
  }
  const jwtToken = generateToken(id);
  res.status(200).send({
    token: jwtToken,
    data: { id, ...data },
  });
};

const findByIdController = async (req, res) => {
  const { id } = req.user;
  const result = await UserModel.findById(id);
  res.status(200).send({data:result.rows[0]})
};

export { createUserController, findByEmailController, findByIdController };
