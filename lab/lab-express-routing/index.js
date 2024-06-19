const express = require('express');
const path = require('path');
const data = require('./country.json');

const app = express();

// LAB 1
// app.get('/', (req, res) => {
//   res.status(200).send('<h2>My First Web App using Express</h2>');
// });

// app.get('/json', (req, res) => {
//   res
//     .status(200)
//     .json({ title: 'My First Web App', message: 'Our Web App API' });
// });

// app.get('/redirect', (req, res) => {
//   res.redirect('https://google.com');
// });

// app.all('*', (req, res) => {
//   res.status(404).send('<h1>This page is not found</h1>');
// });

// LAB 2
// app.get('/todos', (req, res) => {
//   res.status(200).json({ message: `${req.method} ${req.path} success` });
// });
// app.post('/todos', (req, res) => {
//   res.status(200).json({ message: `${req.method} ${req.path} success` });
// });
// app.put('/todos', (req, res) => {
//   res.status(200).json({ message: `${req.method} ${req.path} success` });
// });
// app.patch('/todos', (req, res) => {
//   res.status(200).json({ message: `${req.method} ${req.path} success` });
// });
// app.delete('/todos', (req, res) => {
//   res.status(200).json({ message: `${req.method} ${req.path} success` });
// });
// app.all('*', (req, res) => {
//   res.status(404).json({ message: 'resource not found' });
// });

// LAB 3
// app.get('/', (req, res) => {
//   res.sendFile(path.join(__dirname, 'home.html'));
// });
// app.get('/login', (req, res) => {
//   res.sendFile(path.join(__dirname, 'login.html'));
// });
// app.get('/register', (req, res) => {
//   res.sendFile(path.join(__dirname, 'register.html'));
// });
// app.post('/submit-login', (req, res) => {
//   res.redirect('/');
// });
// app.post('/submit-register', (req, res) => {
//   res.redirect('/');
// });

// LAB 4
// app.get('/sum', (req, res) => {
//   const result = Object.values(req.query).reduce((acc, el) => {
//     if (Array.isArray(JSON.parse(el))) {
//       return acc + JSON.parse(el).reduce((sum, item) => sum + item, 0);
//     }
//     return acc + +el;
//   }, 0);
//   res.status(200).json({ sum: result });
// });

// app.get('/sum/:a/:b', (req, res) => {});
// app.post('/products/:id', (req, res) => {});
// app.get('/users/:id/bookings/:bId', (req, res) => {});

app.listen(8002, () => console.log('server running port 8002'));
