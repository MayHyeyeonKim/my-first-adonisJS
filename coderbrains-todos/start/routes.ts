/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'
import TodosController from 'App/Controllers/Http/TodosController'

Route.get('/', async () => { //라우트가 호출되면 즉시 실행되는 **익명 함수(콜백)**를 사용
  return { hello: 'world' }
})

Route.resource('todos', TodosController).apiOnly() //요청 처리를 컨트롤러의 메서드로 위임
