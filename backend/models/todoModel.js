import mongoose from 'mongoose'

const todoSchema = mongoose.Schema({
  User: {
    type: mongoose.Schema.Type.ObjectId,
    required: true,
    ref: 'User',
  },
  title: {
    type: String,
    required: true,
  },
})

const Todo = mongoose.model('Todo', todoSchema)

export default Todo
