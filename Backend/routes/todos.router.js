const express = require('express')
const router = express.Router()
const todoController = require('../controllers/todos.controller')

router.get('/todos',todoController.todosGetter)
router.post('/todos',todoController.todosPoster);
router.get('/todos/:id',todoController.todoGetter)
router.put('/todos/:id',todoController.todosPutter)
router.delete('/todos/:id',todoController.todosDeleter)


module.exports = router