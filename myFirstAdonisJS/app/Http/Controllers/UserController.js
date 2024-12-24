const UserService = use("App/Services/UserService");

class UserController {
  async create({ request, response }) {
    const userData = request.only(["username", "email", "password"]);
    const user = await UserService.createUser(userData);
    return response.status(200).json(user);
  }
}

module.exports = UserController;
