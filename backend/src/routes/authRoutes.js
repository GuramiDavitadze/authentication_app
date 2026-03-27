import express from "express";
import {
  checkRegistrationData,
  noEmailPasswordCheck,
  checkIfBodyExist,
  verifyToken,
} from "../middleware/authMiddleware.js";
import {
  createUserController,
  findByEmailController,
  findByIdController,
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
AuthRouters.get("/profile", verifyToken, findByIdController);

export { AuthRouters };
