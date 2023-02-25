import mongoose from 'mongoose'

const todoSchema = mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
    ref: 'User',
  },
  text: {
    type: String,
    required: true,
  },
  progress: {
    type: String,
    required: true
  }
})

const Todo = mongoose.model('Todo', todoSchema)

export default Todo
