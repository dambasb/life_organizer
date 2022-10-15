import asyncHandler from 'express-async-handler'
import Todo from '../models/todoModel.js'

// @desc        Fetch all todos
// @route       GET /api/todos
// @access      Public

const getTodos = asyncHandler(async (req, res) => {
  const todos = await Todo.find({})
  res.send('Todo...')
})

//TODO Some error
// @desc        Fetch single todo
// @route       GET /api/todos/:id
// @access      Public
const getTodoById = asyncHandler(async (req, res) => {
  const todo = await Todo.findById(req.params.id)

  if (todo) {
    res.send('Single Todo...')
  } else {
    res.status(404).json({ message: 'Todo not found...' })
  }
  res.send('Single Todo...')
})

export { getTodos, getTodoById }
