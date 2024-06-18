const fs = require('fs');
const axios = require('axios');
const { v4: uuidv4 } = require('uuid');
uuidv4();

const fileService = require('./fileService');
// fileService
//   .readFile('test1111111111111.txt')
//   .then(data => console.log(data))
//   .catch(err => console.log(err));

fileService
  .writeFile('test.txt', 'Weite COntent from index.js')
  .then(() => console.log('success'))
  .catch(err => console.log(err));
