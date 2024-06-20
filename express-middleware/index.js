const express = require('express');

const app = express();

// MIDDLEWARE STACK
// PARSING REQUEST BODY application/json
// app.use(express.json());

// app.use((req, res, next) => {
//   console.log(`${req.method} ${req.url} at ${new Date()}`);
//   next();
// });

// app.use((req, res, next) => {
//   // console.log('#1', req.body);
//   console.log('#1 Middleware Function executed');
//   next();
// });

// app.use('/admin', (req, res, next) => {
//   console.log('ALL METHOD /admin Middleware executed');
// });

// app.get(
//   '/admin',
//   (req, res, next) => {
//     console.log('GET /admin #1 Middleware executed');
//     next();
//   },
//   (req, res, next) => {
//     console.log('GET /admin #2 Middleware executed');
//     next();
//   }
// );

// app.use((req, res, next) => {
//   // console.log('#2', req.body);
//   console.log('#2 Middleware Function executed');
//   next();
// });

// const todoRouter = express.Router();
// app.use('/todos', todoRouter);
// // GET /todos               RETRIEVE ALL TODO
// todoRouter.get('/', (req, res, next) => {
//   console.log('GET /todos');
// });
// // POST /todos              CREATE TODO
// todoRouter.post('/', (req, res, next) => {});
// // PUT /todos/:todoId       UPDATE TODO BY todoId
// todoRouter.put('/:todoId', (req, res, next) => {
//   console.log('PUT /todos');
// });
// // DELETE /todos/:todoId    DELETE TODO BY todoId
// todoRouter.delete('/:todoId', (req, res, next) => {});
// // DELETE /todos            DELETE ALL TODO
// todoRouter.delete('/', (req, res, next) => {});

// const userRouter = express.Router();
// app.use('/users', userRouter);
// // GET /users
// userRouter.get('/', (req, res, next) => {});
// // POST /users
// userRouter.post('/', (req, res, next) => {});

// app.use((err, req, res, next) => {
//   console.log('first error middleware');
// });

// app.use((req, res, next) => {
//   console.log('This is executed');
//   next(new Error('blablabvla'));
//   console.log(a);
//   throw new Error('Intentional throw errro');
// });

// app.use((err, req, res, next) => {
//   console.log('Errror message', err);
//   console.log('Error Middleware');
//   next();
// });

// app.use((req, res, next) => {
//   console.log('#2 Middleware');
//   next();
// });

// app.use((err, req, res, next) => {
//   console.log('last error middleware');
// });

// app.use(express.static('public'));
app.use('/assets/images', express.static('public'));

app.listen(8003, () => console.log('server running on port 8003'));

// #1 Middleware Function executed
// #2 Middleware Function executed
