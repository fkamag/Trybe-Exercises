const fs =  require('fs').promises;
const { join } = require('path');

const file = join(__dirname, '../data/users.data.json');

const read = fs.readFile(file, 'utf8');

const insert = async (user) => {
  const content = await fs.readFile(file, 'utf8');
}