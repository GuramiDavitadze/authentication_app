import express from "express";
import cors from "cors";
import helmet from "helmet";
import { AuthRouters } from "./routes/authRoutes.js";
import { createUserTable } from "./config/db.js";
import { checkApiSecretKey } from "./middleware/globalMiddleware.js";
const app = express();

app.use(express.json());
app.use(cors());
app.use(helmet());
createUserTable();
app.use("/api", checkApiSecretKey);
app.use("/api", AuthRouters);

export default app;
