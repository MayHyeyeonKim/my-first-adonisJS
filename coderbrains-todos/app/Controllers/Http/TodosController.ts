import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Todo from 'App/Models/Todo'

export default class TodosController {
  public async index({}: HttpContextContract) {}

  public async store({request}: HttpContextContract) {}

  public async show({params}: HttpContextContract) {}

  public async update({params, request}: HttpContextContract) {}

  public async destroy({params}: HttpContextContract) {}
}
