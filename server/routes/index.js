const todosController = require('../controllers').todos;
const todosItemController = require('../controllers').todoItems


module.exports = (app) => {
  app.get('/api/v1', (req, res) => res.status(200).send({
    message: 'Welcome to the api'
  }))
  // Todo 
  app.post('/api/v1/todos', todosController.create)

  app.get('/api/v1/todos', todosController.list)

  app.get('/api/v1/todos/:todoId', todosController.retrieve)

  app.put('/api/v1/todos/:todoId', todosController.update)

  app.delete('/api/v1/todos/:todoId', todosController.destroy)

  // Todo Items
  app.post('/api/v1/todos/:todoId/items', todosItemController.create)
  
  app.put('/api/v1/todos/:todoId/items/:todoItemsId', todosItemController.update)
  
  app.delete('/api/v1/todos/:todoId/items/:todoItemsId', todosItemController.destroy)

  app.all('/api/todos/:todoId/items', (res,req) => res.status(405).send({
    message: 'Prohibited'
  }) )
}