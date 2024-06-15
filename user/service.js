const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");

const UserRepository = require("./repository");
const CustomError = require("../middlewares/exception");

class UserService {
  async registeration({ name, email, password }) {
    const existingUser = await UserRepository.findByEmail(email);

    if (existingUser) {
      throw new CustomError("Email already used", 400);
    }

    const { _id } = await UserRepository.addUser({
      name,
      email,
      password,
    });

    return {
      newUserId: _id,
    };
  }

  async login(email, password) {
    const user = await UserRepository.findByEmail(email);

    if (!user) {
      throw new CustomError("Cannot find user", 401);
    }

    const validPassword = await bcrypt.compare(password, user.password);

    if (!validPassword) {
      throw new CustomError("Invalid email or password", 401);
    }

    return {
      token: jwt.sign(
        {
          id: user._id,
          name: encodeURIComponent(user.name),
          email: encodeURIComponent(user.email),
        },
        process.env.JWT_SECRET,
        {
          expiresIn: 1 * 24 * 60 * 60,
        }
      ),
    };
  }
}

module.exports = new UserService();
