// 실제 데이타베이스를 사용하고 있기 때문에 테스트 환경을 분리해야함.

import { test } from '@japa/runner'
import Todo from 'App/Models/Todo'

test.group('Todos API', (group) => {
  // 테스트 후 데이터베이스 정리
  group.each.teardown(async () => {
    await Todo.query().delete()
  })

  test('create a new todo', async ({ client, assert }) => {
    const response = await client.post('/todos').json({
      title: 'Test Todo',
      completed: false,
    })

    response.assertStatus(200) // HTTP 상태 확인
    assert.exists(response.body().id, 'Todo ID does not exist') // 생성된 ID 확인
    assert.equal(response.body().title, 'Test Todo') // 제목 확인
    assert.isFalse(response.body().completed) // 완료 상태 확인
  })

  test('fetch all todos', async ({ client, assert }) => {
    // 테스트 데이터 추가
    await Todo.create({ title: 'First Todo', completed: false })
    await Todo.create({ title: 'Second Todo', completed: true })

    const response = await client.get('/todos')

    response.assertStatus(200)
    assert.isArray(response.body(), 'Response is not an array') // 배열인지 확인
    assert.lengthOf(response.body(), 2, 'Todos count mismatch') // 개수 확인
  })

  test('fetch a single todo', async ({ client, assert }) => {
    const todo = await Todo.create({ title: 'Fetch Me', completed: false })

    const response = await client.get(`/todos/${todo.id}`)

    response.assertStatus(200)
    assert.equal(response.body().title, 'Fetch Me') // 데이터 확인
    assert.isFalse(response.body().completed)
  })

  test('update a todo', async ({ client, assert }) => {
    const todo = await Todo.create({ title: 'Old Title', completed: false })

    const response = await client.put(`/todos/${todo.id}`).json({
      title: 'Updated Title',
      completed: true,
    })

    response.assertStatus(200)
    assert.equal(response.body().title, 'Updated Title') // 업데이트 확인
    assert.isTrue(response.body().completed) // 완료 상태 확인
  })

  test('delete a todo', async ({ client, assert }) => {
    const todo = await Todo.create({ title: 'Delete Me', completed: false })
  
    const response = await client.delete(`/todos/${todo.id}`)
    
    // 응답 상태 확인
    response.assertStatus(200)
    assert.equal(response.body().message, 'Todo deleted successfully!')
  
    // 삭제 여부 확인
    const deletedTodo = await Todo.find(todo.id)
    assert.isNull(deletedTodo, 'Todo was not deleted') // 삭제 여부 확인
  })
})