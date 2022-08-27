const usernameValidation = (req, res, next) => {
  const minCharacters = 4;
  const { username } = req.body;
  if (username && username.length >= minCharacters) {
    return next();
  }
  return res.status(400).json({ message: 'invalid data' });
}

module.exports = usernameValidation;