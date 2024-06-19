const express = require('express');

const app = express();

app.get('/hello-world', (req, res) => {
  res.status(200).send({ message: 'Hello world' });
});

app.listen(8888, () => console.log('server running port 8888'));
