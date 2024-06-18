const fs = require('fs/promises');

const readFile = fileName => {
  const data = fs.readFile(fileName, 'utf-8');
  return data;
};

const writeFile = (fileName, data) => {
  const result = fs.writeFile(fileName, data, 'utf-8');
  return result;
};

// module.exports = { readFile, writeFile };

exports.readFile = readFile;
exports.writeFile = writeFile;
