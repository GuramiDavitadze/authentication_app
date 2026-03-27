import app from "./src/app.js";
import dotenv from "dotenv";
dotenv.config();

const server_port = process.env.PORT || 3000;

app.listen(server_port, () => {
  console.log("It's working");
});
