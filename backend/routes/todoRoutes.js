import express from 'express'
import { getTodoById, getTodos, postTodo } from '../controllers/todoController.js'
import { protect } from '../middleware/authMiddleware.js'

const router = express.Router()

router.route('/').get(getTodos).post(protect, postTodo)
router.route('/:id').get(getTodoById)


export default router
