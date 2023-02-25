import asyncHandler from 'express-async-handler'
import Todo from '../models/todoModel.js'
import User from '../models/userModel.js'

// @desc        Fetch all todos
// @route       GET /api/todos
// @access      Private

const getTodos = asyncHandler(async (req, res) => {
  const todos = await Todo.find({})
  res.send('GET Todo...')
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
