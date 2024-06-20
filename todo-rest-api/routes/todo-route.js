const express = require('express');

const todoController = require('../controllers/todo-controller');

const todoRouter = express.Router();

// GET /todos (retrieve all todo list)
todoRouter.get('/', todoController.getAllTodo);

// POST /todos
// CLIENT ===> SERVER REQUEST BODY title, status
todoRouter.post('/', todoController.createTodo);

// PATCH /todos/:todoId
todoRouter.patch('/:todoId', todoController.updateTodo);

// DELETE /todos/:todoId
todoRouter.delete('/:todoId', todoController.deleteTodo);

module.exports = todoRouter;
