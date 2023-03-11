import asyncHandler from 'express-async-handler'
import Todo from '../models/todoModel.js'
import User from '../models/userModel.js'

// @desc        Fetch all todos
// @route       GET /api/todos
// @access      Private

const getTodos = asyncHandler(async (req, res) => {
  try {

    const user = await User.findById(req.user).select('id')
    let todos = []
    if (req.query.progress === undefined) {
      todos = await Todo.find({ user: user._id })
    }
    else {
      const progress = req.query.progress
      todos = await Todo.find({ user: user._id, progress })
    }

    res.json(todos)
  } catch (error) {
    res.status(500)

    throw new Error(error)

  }
})

// @desc        Post todo
// @route       POST /api/todos
// @access      Private

const postTodo = asyncHandler(async (req, res) => {

  try {

    const user = await User.findById(req.user).select('-password')

    const newTodo = new Todo({
      text: req.body.text,
      progress: req.body.progress,
      user: req.user.id
    })

    const todo = await newTodo.save()

    res.json(todo)

  } catch (error) {
    res.status(500)
    throw new Error('Server error')
  }
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

export { getTodos, getTodoById, postTodo }
