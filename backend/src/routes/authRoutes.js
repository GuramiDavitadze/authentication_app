import express from "express";
import {checkRegistrationData} from '../middleware/authMiddleware.js'
import { createUserController } from "../controllers/authController.js";
const AuthRouters = express.Router();

AuthRouters.post("/register", checkRegistrationData, createUserController);

export { AuthRouters };
