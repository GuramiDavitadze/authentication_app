const app = require("./src/app");
require("dotenv").config();

const server_port = process.env.PORT || 3000;

app.listen(server_port, () => {
  console.log("It's working");
});
