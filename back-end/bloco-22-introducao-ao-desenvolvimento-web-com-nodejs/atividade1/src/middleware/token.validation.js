const tokenValidation = (req, res, next) => {
  const token = req.headers.authorization;
  const regexToken = /^[a-zA-Z0-9]{12}$/g;
  const isValid = regexToken.test(token);
  if (!isValid) {
    return res.status(401).json({ message: "invalid token" });
  }
  return next();
}

module.exports = tokenValidation;