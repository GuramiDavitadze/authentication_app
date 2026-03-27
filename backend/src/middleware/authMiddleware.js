import { pool } from "../config/db.js";

const checkIfBodyExist = async (req, res, next) => {
  if (req.body === undefined) {
    return res
      .status(400)
      .send({ message: "Please provide all required data!" });
  }
  next();
};
const checkRegistrationData = async (req, res, next) => {
  const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
  const { firstname, lastname, email, password, age } = req.body;
  if (
    [firstname, lastname, email, password, age].some(
      (elem) => elem === undefined || elem.trim() === "",
    )
  ) {
    return res
      .status(400)
      .send({ message: "Please provide all required data!" });
  }
  if (!emailRegex.test(email)) {
    return res.status(400).send({ message: "Please provide valid email" });
  }
  if (!passwordRegex.test(password)) {
    return res.status(400).json({
      message: "Invalid password",
      requirements: [
        "Minimum 8 characters",
        "At least one uppercase letter (A-Z)",
        "At least one lowercase letter (a-z)",
        "At least one number (0-9)",
      ],
    });
  }
  if (Number(age) < 5 || Number(age) > 99) {
    return res.status(400).send({ message: "Please provide valid age" });
  }
  if (!Number(age)) {
    return res.status(400).send({ message: "Age must be a number" });
  }
  try {
    const result = await pool.query(
      `SELECT email FROM users WHERE email=($1)`,
      [email],
    );
    if (result.rowCount > 0) {
      return res.status(400).send({ message: "Email already exists" });
    }
  } catch (error) {
    console.log("ERROR", error);
  }
  next();
};
const noEmailPasswordCheck = async (req, res, next) => {
  const { email, password } = req.body;

  const data = [email, password];

  if (data.some((el) => el === undefined || el.trim() === "")) {
    return res
      .status(400)
      .send({ message: "Please provide email and password!" });
  }
  next();
};
export { checkIfBodyExist, checkRegistrationData, noEmailPasswordCheck };
