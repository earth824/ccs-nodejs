// const fs = require('fs');
// import fs from 'fs';

// core module
// const http = require('http');
// third party module
// const axios = require('axios');
// const validator = require('validator');

// local module
// const a = require('./day');
// const { DA, MO } = require('./day');
// console.log(DA);

// instruction#1 5s
// instruction#2 3s
// instruction#3 2s
// syncronous total: 10s
// asyncronous total: 5s ===> 1.Callback (Problem: Callback Hell), 2.Promise (then.catch, async await)

const fs = require('fs');

// fs.readFile('user1.txt', 'utf-8', (err, data) => {
//   console.log(err);
//   console.log(data);
// });

fs.writeFile('user.txt', 'Hello World', 'utf-8', err => {
  console.log(err);
});
