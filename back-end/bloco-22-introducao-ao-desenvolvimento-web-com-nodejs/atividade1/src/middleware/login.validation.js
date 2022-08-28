const userDb = require('../db/user.db');

const loginValidation = async (req, res, next) => {
  if (await userDb.checkLogin(req.body)) {
    return next();
  }
  res.status(400).json({ message: "email ou password incorretos" });
}

module.exports = loginValidation;