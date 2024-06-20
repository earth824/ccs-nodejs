const todoModel = require('../models/todo-model');

const getAllTodo = async (req, res, next) => {
  try {
    const data = await todoModel.getTodo();
    res.status(200).json(data);
  } catch (err) {
    res.status(500).json(err.message);
  }
};

const createTodo = async (req, res, next) => {
  try {
    let data = await todoModel.getTodo();
    data.push({ title: req.body.title, status: req.body.status });
    await todoModel.saveTodo(data);
    res.status(200).json('created successfully');
  } catch (err) {
    res.status(500).json(err.message);
  }
};

const updateTodo = (req, res, next) => {};

const deleteTodo = (req, res, next) => {};

module.exports = {
  getAllTodo,
  createTodo,
  updateTodo,
  deleteTodo
};
