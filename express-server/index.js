const express = require('express');
// const bodyParser = require('body-parser')

// create express application server
const app = express();

// PARSING REQUEST BODY (application/json) ===> convert string to object ===> req.body
app.use(express.json());

// app.use(bodyParser())

// PARSING REQUEST BODY (appication/x-www-form-urlencoded)  ===> convert string to object ===> req.body
app.use(express.urlencoded({ extended: true }));

// PARSING REQUEST BODY (multipart/form-data) ===> convert string to object, upload binary data
// third-party module eg.**multer**, busboy, formidable

// handle GET /downloads
app.get('/downloads', (req, res) => {
  // res.status(200).send('<h1>This is a Download Page</h1>');
  res.redirect('https://nodejs.org');
});

// handle GET /customers
app.get('/customers', (req, res) => {
  // example /customers?name=ann&age=25 ===> { name: 'ann', age: '25' }
  console.log(req.query);
  res.status(400).send('<h1>Very Bad Request</h1>');
});

// handle POST /login
app.post('/login', (req, res) => {
  // Login Logic ===> find user and verify password
  // email, password
  // req.body
  // console.log(req.body);
  console.log(req.headers['user-agent']);
  // res.status(400).send('<h1>Success Login</h1>');
  res.send({ message: 'success' });
});

// handle DELETE /delete-user
app.delete('/delete-user/:zxc/:abcd/:age', (req, res) => {
  // params (req.params)
  // /delete-user/rob/december/55 ===> { zxc: 'rob', abcd: 'december', age: '55' }
  console.log(req.params);
});

// handle PUT /update-product
app.put('/update-product', (req, res) => {});

// handle PATCH /change-password
app.patch('/change-password', (req, res) => {});

const handleRequest = (req, res) => {};
app.get('/basic', handleRequest);

// server listening request at port 8001
app.listen(8001, () => console.log('server running on port 8001'));

// Todo Web Server
// USER want to add new todo item
// POST /new-todo

// USER want to remove todo item
// DELETE /old-todo/:todo-title

// GET        RETRIEVE DATA
// POST       CREATE DATA
// PUT        UPDATE DATA
// PATCH      UPDATE DATA
// DELETE     DELETE DATA
// OPTION

// app.get('/product/:order/:page/:offset)
// app.get('/product/:order/:page/:offset)

// 2x (Success)
// 200 Ok
// 201 Created
// 204 No content

// 4x (Client Error)
// 400 Bad request
// 401 Unauthorized
// 403 Forbidden
// 404 Not Found

// 5x (Server Error)
// 500 Internal server error
