const { UserModel } = require("../models");

class UserRepository {
  async findByEmail(email) {
    return UserModel.findOne({ email });
  }

  async addUser({ name, email, password }) {
    const newUser = new UserModel({ name, email, password })
    return newUser.save()
  }
}
module.exports = new UserRepository();
