const fs =  require('fs').promises;
const { join } = require('path');

const file = join(__dirname, '../data/users.data.json');

const read = async () => {
  const content = await fs.readFile(file, 'utf8');
  return JSON.parse(content);
}

const save = (content) => fs.writeFile(file, JSON.stringify(content));

const insert = async (user) => {
  const users = await read();
  users.push(user);
  await save(users);
}

const checkLogin = async ({ email, password }) => {
  const users = await read();
  const hasUsers = await users.find(user => user.email === email && user.password === password);
  if (hasUsers) {
    return true;
  }
  return false;
}

module.exports = {
  insert,
  checkLogin
};