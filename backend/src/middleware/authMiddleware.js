import { pool } from "../config/db.js";
const checkRegistrationData = async (req, res, next) => {
  const emailRegex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
  const { firstname, lastname, email, password, age } = req.body;
  if (
    [firstname, lastname, email, password, age].some(
      (elem) => elem === undefined || elem.trim() === "",
    )
  ) {
    res.status(400).send({ message: "Please provide all required data!" });
  }
  if (!emailRegex.test(email)) {
    res.status(400).send({ message: "Please provide valid email" });
  }
  if (!passwordRegex.test(password)) {
    res.status(400).json({
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
    res.status(400).send({ message: "Please provide valid age" });
  }
  if (!Number(age)) {
    res.status(400).send({ message: "Age must be a number" });
  }
  try {
    const result = await pool.query(
      `SELECT email FROM users WHERE email=($1)`,
      [email],
    );
    if (result.rowCount > 0) {
      res.status(400).send({ message: "Email already exists" });
    }
  } catch (error) {
    console.log("ERROR", error);
  }
  next();
};

export { checkRegistrationData };
