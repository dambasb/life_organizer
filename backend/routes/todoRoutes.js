import express from 'express'
import { getTodoById, getTodos, postTodo, deleteTodo } from '../controllers/todoController.js'
import { protect } from '../middleware/authMiddleware.js'

const router = express.Router()

router.route('/').get(protect, getTodos).post(protect, postTodo)
router.route('/:id').get(protect, getTodoById).delete(protect, deleteTodo)


export default router
