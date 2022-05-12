const path = require('path')
const express = require('express')
const TodoController = require('./controllers/todo-controller')

const app = express()
app.use(express.urlencoded({ extended: false }))

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))

const todoController = new TodoController()
app.get('/', todoController.index)
app.get('/create', todoController.create)
app.post('/create', todoController.store)   

app.listen(3000)
