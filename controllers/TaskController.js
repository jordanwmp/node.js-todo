const Task = require('../models/Task')

class TaskController {

    static async showTask(req, res) {
        const tasks = await Task.findAll({ raw: true })
        res.render('tasks/allTasks', { tasks })
    }

    static async createTask(req, res) {
        res.render('tasks/create')
    }

    static async saveTask(req, res) {

        const task = {
            title: req.body.title,
            description: req.body.description,
            done: false
        }

        await Task.create(task)

        res.redirect('/')
    }

    static async removeTask(req, res) {
        const { id } = req.body
        await Task.destroy({ where: { id: id } })
        res.redirect('/')
    }

    static async editTask(req, res) {
        const id = req.params.id
        const task = await Task.findOne({ where: { id: id }, raw: true })
        res.render('tasks/edit', { task: task })
    }

    static async updateTask(req, res) {
        console.log('update', req.body)
        const { id, title, description } = req.body

        const task = {
            title,
            description
        }

        await Task.update(task, { where: { id: id } })
        res.redirect('/')
    }

    static async updateStatus(req, res){
        const { id, done } = req.body
        const task = {
            done: done == 0 ? 1 : 0
        } 

        await Task.update(task, {where: {id: id}})

        res.redirect('/')
    }

}

module.exports = TaskController