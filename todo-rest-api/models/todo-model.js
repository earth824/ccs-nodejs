const fs = require('fs/promises');

const getTodo = async () => {
  const data = await fs.readFile('db.json', 'utf-8');
  return JSON.parse(data);
};

const saveTodo = async data => {
  await fs.writeFile('db.json', JSON.stringify(data), 'utf-8');
};

module.exports = {
  getTodo,
  saveTodo
};
