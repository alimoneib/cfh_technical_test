const jwt = require("jsonwebtoken");
const CustomError = require("./exception");

class AuthenticationMiddleware {
  verify(req, res, next) {
    try {
      const token = req.headers.authorization ?? "";

      if (!token || token === "") {
        throw new CustomError("Unauthorized", 401);
      }
      const { id } = jwt.verify(token, process.env.JWT_SECRET);

      if (!id) {
        throw new CustomError("Unauthorized", 401);
      }

      req.user = {
        id,
      };

      next();
    } catch (error) {
      next(error);
    }
  }
}

module.exports = new AuthenticationMiddleware();
