import Route from '@ioc:Adonis/Core/Route'
// import TodosController from 'App/Controllers/Http/TodosController'

Route.get('/', async () => {
  return { hello: 'world' }
})

Route.resource('todos', 'TodosController').apiOnly()
