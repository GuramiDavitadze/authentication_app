import express from "express";
import {
  checkRegistrationData,
  noEmailPasswordCheck,
  checkIfBodyExist,
} from "../middleware/authMiddleware.js";
import {
  createUserController,
  findByEmailController,
} from "../controllers/authController.js";
const AuthRouters = express.Router();

AuthRouters.post(
  "/register",
  checkIfBodyExist,
  checkRegistrationData,
  createUserController,
);
AuthRouters.post(
  "/auth",
  checkIfBodyExist,
  noEmailPasswordCheck,
  findByEmailController,
);
export { AuthRouters };
