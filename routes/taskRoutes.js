const express = require('express')
const router = express.Router()
const TaskController = require('../controllers/TaskController')

router.get('/add-task', TaskController.createTask)
router.post('/save-task', TaskController.saveTask)
router.post('/remove-task', TaskController.removeTask)
router.get('/edit-task/:id', TaskController.editTask)
router.post('/update-task', TaskController.updateTask)
router.post('/update-status', TaskController.updateStatus)
router.get('/', TaskController.showTask)

module.exports = router