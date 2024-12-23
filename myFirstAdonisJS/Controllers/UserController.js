const UserService = use("App/Service/UserService");

class UserController {
  async create({ req, res }) {
    const userData = req.only(["username", "email", "password"]);
    const user = await UserService.createUser(userData);
    return res.status(200).json(user);
  }
}

module.exports = UserController;
