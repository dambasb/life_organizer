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


// @desc        Delete todo
// @route       DELETE /api/todos/:id
// @access      Private

const deleteTodo = asyncHandler(async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id)

    if (todo) {
      await todo.remove()
      res.json({ msg: 'Todo removed' })
    } else {
      res.status(404)
      throw new Error({ msg: 'Todo not found' })
    }

    // Check user
    if (todo.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'User not authorized' })
    }

  } catch (error) {
    res.status(500)
    throw new Error('Server error')
  }
})

// @desc        Fetch single todo
// @route       GET /api/todos/:id
// @access      Private
const getTodoById = asyncHandler(async (req, res) => {
  const todo = await Todo.findById(req.params.id)

  if (todo) {
    res.json(todo)
  } else {
    res.status(404).json({ message: 'Todo not found...' })
  }
  res.send('Single Todo...')
})

// @desc        Update single todo
// @route       PUT /api/todos/:id
// @access      Private
const updateTodo = asyncHandler(async (req, res) => {

  const todo = await Todo.findById(req.params.id)

  if (todo) {
    todo.text = req.body.text || todo.text
    todo.progress = req.body.progress || todo.progress

    const updatedTodo = await todo.save()

    res.json({
      _id: updatedTodo._id,
      text: updatedTodo.text,
      progress: updatedTodo.progress,
    })
  } else {
    res.status(401)
    throw new Error('Todo not found')
  }
})

export { getTodos, getTodoById, postTodo, deleteTodo, updateTodo }


