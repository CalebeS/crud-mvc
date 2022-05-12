const Todo = require('../models/todo')

class TodoController {
  index(request, response) {
    const todos = Todo.loadAll()
    response.render('index.ejs', { todos })
  }

  create(request, response) {
    response.render('form.ejs')
  }

  store(request, response) {
    const todo = new Todo(request.body.title)
    Todo.add(todo)
    response.redirect('/')
  }
}

module.exports = TodoController
