const checkApiSecretKey = (req, res, next) => {
  const provided_secret_key = req?.headers["secret-api-key"];
  const secret_api_key = process.env.SECRET_API_KEY;
  if (secret_api_key != provided_secret_key) {
    return res.status(403).send({ message: "Access to this api is denied!" });
  }
  next();
};

export { checkApiSecretKey };
