import jwt from "jsonwebtoken";

export const generateToken = (userId) => {
  const payload = { id: userId };

  const secret = process.env.JWT_SECRET;
  return jwt.sign(payload, secret);
};
