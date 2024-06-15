const UserValidation = require('./validation');
const UserService = require('./service');

class UserController {
  async registeration(req, res, next) {
    try {
      const validationResult = UserValidation.registerationSchema.validate(req.body);
      if (validationResult.error) {
        throw validationResult.error;
      }
      const { name, email, password } = validationResult.value;

      const newUser = await UserService.registeration({name, email, password}).catch((e) => {
        throw e;
      });
      Object.assign(res, {
        data: newUser,
        message: 'User Registeration',
      });
      next();
    } catch (error) {
      next(error)
    }
  }


  async login(req, res, next) {
    try {
      const validationResult = UserValidation.loginSchema.validate(req.body);

      if (validationResult.error) {
        throw validationResult.error;
      }
      const { email, password } = validationResult.value;

      const {
        token
      } = await UserService.login(email, password).catch((e) => {
        throw e;
      });
      Object.assign(res, {
        data: {
          token,
        },
        message: 'User login',
      });
      next();
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new UserController();
