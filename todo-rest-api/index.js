const express = require('express');

const todoRouter = require('./routes/todo-route');

const app = express();

app.use(express.json());

app.use('/todos', todoRouter);

app.listen(8006, () => console.log('todo list web api running on port 8006'));
