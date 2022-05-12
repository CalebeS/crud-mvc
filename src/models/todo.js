const path = require('path')
const fs = require('fs')

class Todo {
  constructor(title, completed = false) {
    this.title = title
    this.completed = completed
  }
 

  static caminhoDoArquivo = path.join(__dirname, '..', '..', 'todos.json')
  

  static add(todo) {
    const todos = Todo.loadAll()
    todos.push(todo)
    fs.writeFileSync(Todo.caminhoDoArquivo, JSON.stringify(todos))
  }
  


  static loadAll() {
    const arquivoExiste = fs.existsSync(Todo.caminhoDoArquivo)

    if (!arquivoExiste) {
      fs.writeFileSync(Todo.caminhoDoArquivo, JSON.stringify([]))
    }

    const texto = fs.readFileSync(Todo.caminhoDoArquivo, 'utf-8')
    const array = JSON.parse(texto)

    const todos = []

    for (const item of array) {
      const todo = new Todo(item.title, item.completed)
      todos.push(todo)
    }

    return todos
  }
}

module.exports = Todo
